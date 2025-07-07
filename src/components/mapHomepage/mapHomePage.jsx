import React, { useEffect, useRef, useState } from "react";
import { X, MapPin, Info } from "lucide-react";

// Load MapBox resources
export const loadMapboxResources = (callback) => {
  // Load Mapbox GL JS script
  const script = document.createElement("script");
  script.src = "https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.js";
  script.onload = callback;
  document.head.appendChild(script);

  // Load Mapbox GL CSS
  const link = document.createElement("link");
  link.href = "https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

// Territory configuration
const territoryConfig = {
  alberta: {
    name: "Alberta",
    fileName: "alberta.geojson",
    color: "#228B22",
  },
  british_columbia: {
    name: "British Columbia",
    fileName: "british_columbia.geojson",
    color: "#4169E1",
  },
  yukon: {
    name: "Yukon",
    fileName: "yukon.geojson",
    color: "#FF6347",
  },
};

// Function to load GeoJSON files
const loadGeoJSON = async (fileName) => {
  try {
    // Method 1: If files are in public folder
    const response = await fetch(`/geojson/${fileName}`);
    if (!response.ok) throw new Error(`Failed to load ${fileName}`);
    return await response.json();
  } catch (error) {
    // Return empty FeatureCollection as fallback
    return {
      type: "FeatureCollection",
      features: [],
    };
  }
};

// Mock points of interest
const mockPOIs = [
  {
    id: 1,
    name: "Calgary",
    coordinates: [-114.0719, 51.0447],
    province: "Alberta",
    description:
      "Calgary leads with cowboy confidence and keeps things exciting with a sprawling river valley and festivals.",
    image: "/api/placeholder/300/200",
    highlights: ["Cowboy Culture", "River Valley", "Festivals"],
  },
  {
    id: 2,
    name: "Edmonton",
    coordinates: [-113.4909, 53.5461],
    province: "Alberta",
    description:
      "Edmonton keeps things easygoing, with a sprawling river valley and a festival for just about everything.",
    image: "/api/placeholder/300/200",
    highlights: ["River Valley", "Festival City", "Arts Scene"],
  },
  {
    id: 3,
    name: "Vancouver",
    coordinates: [-123.1207, 49.2827],
    province: "British Columbia",
    description:
      "Spectacular mountain and ocean views with vibrant urban culture and outdoor adventures.",
    image: "/api/placeholder/300/200",
    highlights: ["Mountain Views", "Ocean Access", "Urban Culture"],
  },
  {
    id: 4,
    name: "Whitehorse",
    coordinates: [-135.0568, 60.7212],
    province: "Yukon",
    description:
      "Gateway to the wilderness with northern lights and authentic frontier spirit.",
    image: "/api/placeholder/300/200",
    highlights: ["Northern Lights", "Wilderness", "Frontier Culture"],
  },
];

const CanadaGlobeMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapboxLoaded, setMapboxLoaded] = useState(false);
  const [selectedPOI, setSelectedPOI] = useState(null);
  const [hoveredPOI, setHoveredPOI] = useState(null);
  const [territoryData, setTerritoryData] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Load GeoJSON data
  useEffect(() => {
    const loadTerritories = async () => {
      setIsLoadingData(true);
      const loadedData = {};

      // Load all territory files
      for (const [key, config] of Object.entries(territoryConfig)) {
        try {
          const data = await loadGeoJSON(config.fileName);
          loadedData[key] = data;
        } catch (error) {
          console.error(`Failed to load ${config.fileName}:`, error);
        }
      }

      setTerritoryData(loadedData);
      setIsLoadingData(false);
    };

    loadTerritories();
  }, []);

  // Load MapBox resources
  useEffect(() => {
    loadMapboxResources(() => {
      setMapboxLoaded(true);
    });
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapboxLoaded || map.current || isLoadingData) return;

    // Initialize map with globe projection
    map.current = new window.mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-106, 57],
      zoom: 3,
      projection: "globe",
      accessToken:
        "pk.eyJ1IjoibmdvdGhhbmhiaW5oMjAwNCIsImEiOiJjbWMzN3pyNzkwMmNzMmlxeDY0Z295a3o2In0.N9r67mt54P8n6b91AyV-4w",
    });

    // Add atmosphere to globe
    map.current.on("style.load", () => {
      map.current.setFog({
        color: "rgb(186, 210, 235)",
        "high-color": "rgb(36, 92, 223)",
        "horizon-blend": 0.02,
        "space-color": "rgb(11, 11, 25)",
        "star-intensity": 0.6,
      });

      // Add territory boundaries
      addTerritoryBoundaries();

      // Add points of interest
      addPointsOfInterest();
    });

    // Handle map clicks
    map.current.on("click", (e) => {
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ["poi-markers"],
      });

      if (features.length > 0) {
        const poiId = features[0].properties.id;
        const poi = mockPOIs.find((p) => p.id === parseInt(poiId));
        if (poi) {
          focusOnPOI(poi);
        }
      }
    });

    // Handle hover effects
    map.current.on("mouseenter", "poi-markers", (e) => {
      map.current.getCanvas().style.cursor = "pointer";
      const poiId = e.features[0].properties.id;
      setHoveredPOI(parseInt(poiId));
    });

    map.current.on("mouseleave", "poi-markers", () => {
      map.current.getCanvas().style.cursor = "";
      setHoveredPOI(null);
    });
  }, [mapboxLoaded, isLoadingData, territoryData]);

  const addTerritoryBoundaries = () => {
    Object.entries(territoryData).forEach(([territory, geojsonData]) => {
      // Skip if no data loaded
      if (!geojsonData || !geojsonData.features) return;

      const config = territoryConfig[territory];
      if (!config) return;

      const color = config.color;

      // Add source
      if (!map.current.getSource(`${territory}-boundary`)) {
        map.current.addSource(`${territory}-boundary`, {
          type: "geojson",
          data: geojsonData,
        });
      }

      // Add fill layer
      if (!map.current.getLayer(`${territory}-boundary-fill`)) {
        map.current.addLayer({
          id: `${territory}-boundary-fill`,
          type: "fill",
          source: `${territory}-boundary`,
          paint: {
            "fill-color": color,
            "fill-opacity": 0.1,
          },
        });
      }

      // Add line layer
      if (!map.current.getLayer(`${territory}-boundary-line`)) {
        map.current.addLayer({
          id: `${territory}-boundary-line`,
          type: "line",
          source: `${territory}-boundary`,
          paint: {
            "line-color": color,
            "line-width": 2,
          },
        });
      }
    });
  };

  const addPointsOfInterest = () => {
    // Add POI source
    if (!map.current.getSource("poi-data")) {
      map.current.addSource("poi-data", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: mockPOIs.map((poi) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: poi.coordinates,
            },
            properties: {
              id: poi.id,
              name: poi.name,
              province: poi.province,
            },
          })),
        },
      });
    }

    // Add POI markers
    if (!map.current.getLayer("poi-markers")) {
      map.current.addLayer({
        id: "poi-markers",
        type: "circle",
        source: "poi-data",
        paint: {
          "circle-radius": 8,
          "circle-color": "#ec2f00",
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2,
        },
      });
    }

    // Add POI labels
    if (!map.current.getLayer("poi-labels")) {
      map.current.addLayer({
        id: "poi-labels",
        type: "symbol",
        source: "poi-data",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": 12,
          "text-offset": [0, 2],
          "text-anchor": "top",
        },
        paint: {
          "text-color": "#ffffff",
          "text-halo-color": "#000000",
          "text-halo-width": 1,
        },
      });
    }
  };

  const focusOnPOI = (poi) => {
    setSelectedPOI(poi);

    // Fly to location
    map.current.flyTo({
      center: poi.coordinates,
      zoom: 10,
      duration: 2000,
    });
  };

  const resetView = () => {
    setSelectedPOI(null);
    map.current.flyTo({
      center: [-106, 57],
      zoom: 3,
      duration: 2000,
    });
  };

  if (!mapboxLoaded || isLoadingData) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-xl">
          {isLoadingData ? "Loading GeoJSON data..." : "Loading MapBox..."}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Header */}
      <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-4 max-w-md">
        <div className="text-gray-600 text-sm mb-1">Canada, naturally.</div>
        <div className="text-2xl font-bold text-red-600 mb-2">
          Once-in-a-lifetime happens all the time.
        </div>
        <div className="text-sm text-gray-700 mb-3">
          Whether it's postcard-worthy views at every turn or warm-hearted folks
          always eager to lend a hand, the exceptional is just a part of
          everyday Canada.
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700 transition-colors">
          Learn more
        </button>
      </div>

      {/* POI Information Panel */}
      {selectedPOI && (
        <div className="absolute left-4 top-4 z-10 bg-white rounded-lg shadow-lg max-w-sm">
          <div className="relative">
            <img
              src={selectedPOI.image}
              alt={selectedPOI.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <button
              onClick={() => setSelectedPOI(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold text-red-600 mb-2">
              {selectedPOI.name}
            </h2>
            <p className="text-gray-700 text-sm mb-3">
              {selectedPOI.description}
            </p>

            <div className="space-y-2">
              {selectedPOI.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Info size={14} className="text-red-600" />
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedPOI(null)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700 transition-colors"
            >
              Discover {selectedPOI.name}
            </button>
          </div>
        </div>
      )}

      {/* Reset View Button */}
      {selectedPOI && (
        <button
          onClick={resetView}
          className="absolute bottom-4 left-4 z-10 bg-white rounded-lg shadow-lg px-4 py-2 hover:bg-gray-100 transition-colors"
        >
          Reset View
        </button>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-10 bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-bold text-sm mb-2">Territories</h3>
        {Object.entries(territoryConfig).map(([territory, config]) => (
          <div key={territory} className="flex items-center space-x-2 mb-1">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: config.color }}
            />
            <span className="text-sm">{config.name}</span>
          </div>
        ))}
        <div className="flex items-center space-x-2 mt-2">
          <MapPin size={16} className="text-red-600" />
          <span className="text-sm">Points of Interest</span>
        </div>
      </div>
    </div>
  );
};

export default CanadaGlobeMap;
