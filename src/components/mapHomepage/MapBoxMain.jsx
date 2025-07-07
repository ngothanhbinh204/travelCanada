import React, { useEffect, useRef, useState } from "react";
import bbox from "@turf/bbox";
import { motion, AnimatePresence } from "framer-motion";

import InfoPanel from "./InfoPanel";
import PopupFix from "./PopupFix";
import DropdownTerritoriesMobile from "./DropdownTerritoriesMobile";

import { territoriesAll, mapConfig } from "../../api/territoriesAll";
import { loadMapboxResources, initializeMapbox } from "../../utils/mapUtils";

const MapBoxMain = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const activePopups = useRef([]);

  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const [showPopupFix, setShowPopupFix] = useState(true);

  // Hiệu ứng panel
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (selectedTerritory) setAnimationKey((prev) => prev + 1);
  }, [selectedTerritory?.id]);

  useEffect(() => {
    if (map.current) return;

    loadMapboxResources(() => {
      if (!window.mapboxgl) return;

      map.current = initializeMapbox(mapContainer.current, mapConfig);

      map.current.on("load", () => {
        const allPoints = territoriesAll.flatMap((t) =>
          t.points.map((p) => ({
            type: "Feature",
            geometry: { type: "Point", coordinates: p.coordinates },
            properties: { name: p.name },
          }))
        );

        map.current.addSource("all-points", {
          type: "geojson",
          data: { type: "FeatureCollection", features: allPoints },
        });

        map.current.addLayer({
          id: "all-points-layer",
          type: "circle",
          source: "all-points",
          paint: {
            "circle-radius": 4,
            "circle-color": "#ff0000",
            "circle-stroke-width": 2,
            "circle-stroke-color": "#fff",
          },
        });

        territoriesAll.forEach((territory) => {
          const sourceId = `boundary-${territory.id}`;
          const layerId = `fill-${territory.id}`;

          fetch(territory.boundary)
            .then((res) => res.json())
            .then((boundaryData) => {
              const bounds = bbox(boundaryData);
              territory.bounds = bounds;

              if (!map.current.getSource(sourceId)) {
                map.current.addSource(sourceId, {
                  type: "geojson",
                  data: boundaryData,
                });
              }

              if (!map.current.getLayer(layerId)) {
                map.current.addLayer({
                  id: layerId,
                  type: "fill",
                  source: sourceId,
                  paint: {
                    "fill-color": "#4c4c4c",
                    "fill-opacity": 0.7,
                    "fill-outline-color": "#4c4c4c",
                  },
                });

                map.current.on("mouseenter", layerId, () => {
                  map.current.getCanvas().style.cursor = "pointer";
                  map.current.setPaintProperty(layerId, "fill-opacity", 0.9);
                });

                map.current.on("mouseleave", layerId, () => {
                  map.current.getCanvas().style.cursor = "";
                  map.current.setPaintProperty(layerId, "fill-opacity", 0.7);
                });

                map.current.on("click", layerId, () =>
                  handleTerritorySelection(territory)
                );
              }
            });
        });
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const handleTerritorySelection = (territory) => {
    setSelectedTerritory(territory);
    setShowPopupFix(false);

    if (!map.current) return;

    map.current.fitBounds(territory.bounds, {
      padding: 40,
      duration: 1500,
      essential: true,
    });

    territoriesAll.forEach((t) => {
      const layerId = `fill-${t.id}`;
      const circleLayerId = `points-layer-${t.id}-circle`;
      const labelLayerId = `points-layer-${t.id}-label`;
      const sourceId = `points-${t.id}`;

      if (map.current.getLayer(layerId)) {
        map.current.setPaintProperty(layerId, "fill-color", "#4c4c4c");
        map.current.setPaintProperty(layerId, "fill-opacity", 0.7);
      }

      if (map.current.getLayer(circleLayerId))
        map.current.removeLayer(circleLayerId);
      if (map.current.getLayer(labelLayerId))
        map.current.removeLayer(labelLayerId);
      if (map.current.getSource(sourceId)) map.current.removeSource(sourceId);
    });

    const selectedLayerId = `fill-${territory.id}`;
    map.current.setPaintProperty(selectedLayerId, "fill-color", "#0a2900");
    map.current.setPaintProperty(selectedLayerId, "fill-opacity", 0.8);

    if (map.current.getLayer("all-points-layer"))
      map.current.removeLayer("all-points-layer");
    if (map.current.getSource("all-points"))
      map.current.removeSource("all-points");

    activePopups.current.forEach((p) => p.remove());
    activePopups.current = [];

    territory.points.forEach((point) => {
      const popup = new window.mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: [7, 0],
        anchor: "left",
      })
        .setLngLat(point.coordinates)
        .setHTML(`<div class="text-primary font-bold">${point.name}</div>`)
        .addTo(map.current);

      activePopups.current.push(popup);
    });

    const pointSourceId = `points-${territory.id}`;
    const circleLayerId = `points-layer-${territory.id}-circle`;

    const pointsGeoJson = {
      type: "FeatureCollection",
      features: territory.points.map((p) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: p.coordinates },
        properties: { name: p.name },
      })),
    };

    map.current.addSource(pointSourceId, {
      type: "geojson",
      data: pointsGeoJson,
    });

    map.current.addLayer({
      id: circleLayerId,
      type: "circle",
      source: pointSourceId,
      paint: {
        "circle-radius": 4,
        "circle-color": "#ff0000",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#fff",
      },
    });
  };

  const handleClosePanel = () => {
    setSelectedTerritory(null);
    setShowPopupFix(true);

    if (!map.current) return;

    map.current.flyTo({
      center: mapConfig.center,
      zoom: mapConfig.zoom,
      duration: 800,
    });

    territoriesAll.forEach((t) => {
      const circleLayerId = `points-layer-${t.id}-circle`;
      const sourceId = `points-${t.id}`;

      if (map.current.getLayer(circleLayerId))
        map.current.removeLayer(circleLayerId);
      if (map.current.getSource(sourceId)) map.current.removeSource(sourceId);
    });

    territoriesAll.forEach((t) => {
      const layerId = `fill-${t.id}`;
      if (map.current.getLayer(layerId)) {
        map.current.setPaintProperty(layerId, "fill-color", "#4c4c4c");
        map.current.setPaintProperty(layerId, "fill-opacity", 0.7);
      }
    });

    activePopups.current.forEach((p) => p.remove());
    activePopups.current = [];

    const allPoints = territoriesAll.flatMap((t) =>
      t.points.map((p) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: p.coordinates },
        properties: { name: p.name },
      }))
    );

    map.current.addSource("all-points", {
      type: "geojson",
      data: { type: "FeatureCollection", features: allPoints },
    });

    map.current.addLayer({
      id: "all-points-layer",
      type: "circle",
      source: "all-points",
      paint: {
        "circle-radius": 4,
        "circle-color": "#ff0000",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#fff",
      },
    });
  };

  return (
    <div className="px-0 max-w-full xl:mx-auto">
      <div className="relative">
        <div className="block md:hidden">
          <PopupFix />
        </div>

        {showPopupFix && (
          <div className="hidden md:block">
            <PopupFix />
          </div>
        )}

        <div className="relative w-full mx-auto md:h-screen">
          <div className="relative z-[9] h-[100px] bg-gradient-to-b from-white lg:h-0"></div>
          <div
            ref={mapContainer}
            className="relative mt-[-100px] h-[500px] md:h-full lg:mt-0"
          />

          <DropdownTerritoriesMobile
            territories={territoriesAll}
            selectedTerritory={selectedTerritory}
            onSelect={(territory) => handleTerritorySelection(territory)}
            onClose={handleClosePanel}
          />
        </div>

        <AnimatePresence mode="wait">
          {selectedTerritory && (
            <motion.div
              key={selectedTerritory?.id || "panel"}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 lg:top-0 lg:left-0 z-50 h-auto lg:h-full w-full lg:w-[480px]"
            >
              <InfoPanel
                selectedPlace={selectedTerritory}
                onClose={handleClosePanel}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MapBoxMain;
