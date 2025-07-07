import React, { useEffect, useRef, useState } from "react";
import MapHeader from "./MapHeader";
import HoverTooltip from "./HoverTooltip";
import InfoPanel from "./InfoPanel";
import TerritoryPopupDirection from "./TerritoryPopupDirection";
import MapLayerManager from "../../utils/MapLayerManager";
import { mapConfig } from "../../data/mapData";
import { dataTerritories } from "../../api/territories";
import {
  fitBoundsToActiveCategories,
  loadMapboxResources,
  initializeMapbox,
} from "../../utils/mapUtils";

const MapBoxMain = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const layerManager = useRef(null);

  const [activeCategories, setActiveCategories] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const hoverPopupRef = useRef(null);
  const [previousCamera, setPreviousCamera] = useState(null);

  const [selectedAdjacent, setSelectedAdjacent] = useState(null);
  const [popupPosition, setPopupPosition] = useState(null);

  const territory = dataTerritories;
  const mapData = territory.mapConfig;
  const categories = territory.categories;
  const places = territory.places;
  const adjacents = territory.adjacents;

  useEffect(() => {
    if (map.current) return;

    loadMapboxResources(initializeMap);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const initializeMap = () => {
    if (!window.mapboxgl || map.current) return;

    map.current = initializeMapbox(mapContainer.current, mapData);

    map.current.on("load", () => {
      layerManager.current = new MapLayerManager(
        map.current,
        categories,
        places
      );
      layerManager.current.loadIcons();
      layerManager.current.addSource();
      layerManager.current.addLayers(
        handleHover,
        handleMouseMove,
        handleMouseLeave,
        handleClick
      );

      fetch(territory.boundary)
        .then((res) => res.json())
        .then((data) => {
          layerManager.current.addBoundaryLayer(data);
          map.current.addSource("main-boundary", { type: "geojson", data });
          map.current.addLayer({
            id: "main-fill",
            type: "fill",
            source: "main-boundary",
            paint: {
              "fill-color": "#E53935",
              "fill-opacity": 0.05,
              "fill-outline-color": "#E53935",
            },
          });
        });

      adjacents.forEach((adj) => {
        const sourceId = `adj-boundary-${adj.id}`;
        const layerId = `adj-fill-${adj.id}`;

        fetch(adj.boundary)
          .then((res) => res.json())
          .then((data) => {
            map.current.addSource(sourceId, { type: "geojson", data });
            map.current.addLayer({
              id: layerId,
              type: "fill",
              source: sourceId,
              paint: {
                "fill-color": "#000000",
                "fill-opacity": 0.3,
                "fill-outline-color": "#000000",
              },
            });

            map.current.on("mouseenter", layerId, () => {
              map.current.getCanvas().style.cursor = "pointer";
              map.current.setPaintProperty(layerId, "fill-opacity", 0.7);
            });

            map.current.on("mouseleave", layerId, () => {
              map.current.getCanvas().style.cursor = "";
              map.current.setPaintProperty(layerId, "fill-opacity", 0.3);
            });

            map.current.on("click", layerId, () => {
              setSelectedAdjacent(adj);
              // setPopupPosition(e.lngLat);
            });
          });
      });

      setActiveCategories([]);
    });
  };

  useEffect(() => {
    if (selectedAdjacent && popupPosition && map.current) {
      const popup = new window.mapboxgl.Popup({
        closeButton: false,
        closeOnClick: true,
        offset: 15,
      })
        .setLngLat(popupPosition)
        .setDOMContent(
          (() => {
            const container = document.createElement("div");
            // const onConfirm = () => {
            //   window.location.href = selectedAdjacent.link;
            // };
            // const onClose = () => {
            //   setSelectedAdjacent(null);
            //   popup.remove();
            // };

            return container;
          })()
        )
        .addTo(map.current);

      return () => {
        popup.remove();
      };
    }
  }, [selectedAdjacent, popupPosition]);

  const handleHover = (e) => {
    map.current.getCanvas().style.cursor = "pointer";

    if (e.features.length > 0) {
      const feature = e.features[0];
      setHoveredPlace(feature.properties);

      if (hoverPopupRef.current) {
        hoverPopupRef.current.remove();
      }

      const popup = new window.mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: [24, 0],
        anchor: "left",
        className: "custom-popup",
      })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<div style="background: ${
            categories.find((c) => c.id === feature.properties.category).color
          }; border: 1px solid #fff; color: white; font-weight: bold; padding: 6px 10px; border-radius: 16px; font-size: 12px;">
            ${feature.properties.name}
          </div>`
        )
        .addTo(map.current);

      hoverPopupRef.current = popup;
    }
  };

  const handleMouseMove = (e) => {
    const canvas = map.current.getCanvas();
    const rect = canvas.getBoundingClientRect();
    setMousePosition({
      x: e.point.x + rect.left,
      y: e.point.y + rect.top,
    });
  };

  const handleMouseLeave = () => {
    map.current.getCanvas().style.cursor = "";
    setHoveredPlace(null);

    if (hoverPopupRef.current) {
      hoverPopupRef.current.remove();
      hoverPopupRef.current = null;
    }
  };

  const handleClick = (e) => {
    if (e.features.length > 0) {
      const currentCenter = map.current.getCenter();
      const currentZoom = map.current.getZoom();

      setPreviousCamera({
        center: [currentCenter.lng, currentCenter.lat],
        zoom: currentZoom,
      });

      setSelectedPlace(e.features[0].properties);
      map.current.flyTo({
        center: e.features[0].geometry.coordinates,
        zoom: 6,
        duration: 500,
      });
    }
  };

  const handleCloseInfoPanel = () => {
    setSelectedPlace(null);

    if (previousCamera) {
      map.current.flyTo({
        center: previousCamera.center,
        zoom: previousCamera.zoom,
        duration: 1000,
      });
    }
  };

  const handleCategoryToggle = (categoryId) => {
    let newActiveCategories;
    if (activeCategories.includes(categoryId)) {
      newActiveCategories = activeCategories.filter((id) => id !== categoryId);
    } else {
      newActiveCategories = [...activeCategories, categoryId];
    }

    setActiveCategories(newActiveCategories);

    if (layerManager.current) {
      layerManager.current.updateLayerVisibility(newActiveCategories);
    }

    if (newActiveCategories.length > 0) {
      fitBoundsToActiveCategories(map.current, places, newActiveCategories);
    } else {
      map.current.flyTo({
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        duration: 500,
      });
    }
  };

  return (
    <div className="c-container px-4 md:px-16 2xl:px-20 3xl:px-0 max-w-screen-xl xl:mx-auto">
      <div className="relative w-full mx-auto h-screen">
        <MapHeader
          categories={categories}
          activeCategories={activeCategories}
          onCategoryToggle={handleCategoryToggle}
        />
        <TerritoryPopupDirection
          territory={selectedAdjacent}
          onConfirm={() => {
            window.location.href = selectedAdjacent.link;
          }}
          onClose={() => setSelectedAdjacent(null)}
        />

        <div ref={mapContainer} className="absolute h-full inset-0 mt-28" />
        <HoverTooltip
          hoveredPlace={hoveredPlace}
          mousePosition={mousePosition}
        />
        <InfoPanel
          selectedPlace={selectedPlace}
          categories={categories}
          onClose={handleCloseInfoPanel}
        />
      </div>
    </div>
  );
};

export default MapBoxMain;
