import React, { useState, useEffect, useRef } from "react";
import { Mountain, TreePine, Plane, MapPin, Globe, Leaf } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// Mock API data
const mockData = {
  cities: [
    {
      id: 1,
      name: "Vancouver",
      coordinates: [-123.1207, 49.2827],
      type: "major",
    },
    {
      id: 2,
      name: "Victoria",
      coordinates: [-123.3656, 48.4284],
      type: "major",
    },
    {
      id: 3,
      name: "Whistler",
      coordinates: [-122.9574, 50.1163],
      type: "town",
    },
    { id: 4, name: "Kelowna", coordinates: [-119.496, 49.888], type: "major" },
    {
      id: 5,
      name: "Calgary",
      coordinates: [-114.0719, 51.0447],
      type: "major",
    },
    {
      id: 6,
      name: "Prince George",
      coordinates: [-122.7497, 53.9171],
      type: "town",
    },
  ],
  nationalParks: [
    { id: 1, name: "Banff National Park", coordinates: [-115.5708, 51.4968] },
    { id: 2, name: "Jasper National Park", coordinates: [-118.0814, 52.8737] },
    { id: 3, name: "Yoho National Park", coordinates: [-116.585, 51.45] },
    {
      id: 4,
      name: "Pacific Rim National Park",
      coordinates: [-125.7739, 49.0424],
    },
  ],
  skiResorts: [
    { id: 1, name: "Whistler Blackcomb", coordinates: [-122.9574, 50.1163] },
    { id: 2, name: "Sun Peaks", coordinates: [-120.1192, 50.8803] },
    { id: 3, name: "Big White", coordinates: [-118.9517, 49.7308] },
    { id: 4, name: "Revelstoke", coordinates: [-118.2023, 50.9981] },
  ],
  airports: [
    {
      id: 1,
      name: "Vancouver International",
      coordinates: [-123.184, 49.1939],
      code: "YVR",
    },
    {
      id: 2,
      name: "Calgary International",
      coordinates: [-114.02, 51.1315],
      code: "YYC",
    },
    {
      id: 3,
      name: "Victoria International",
      coordinates: [-123.426, 48.647],
      code: "YYJ",
    },
    {
      id: 4,
      name: "Kelowna Airport",
      coordinates: [-119.378, 49.9561],
      code: "YKA",
    },
  ],
  unescoSites: [
    {
      id: 1,
      name: "Canadian Rocky Mountain Parks",
      coordinates: [-116.1739, 51.4253],
    },
    {
      id: 2,
      name: "Waterton-Glacier International Peace Park",
      coordinates: [-113.9067, 49.05],
    },
  ],
  biosphereReserves: [
    { id: 1, name: "Clayoquot Sound", coordinates: [-125.8962, 49.15] },
    { id: 2, name: "Mount Arrowsmith", coordinates: [-124.6476, 49.2167] },
    { id: 3, name: "Waterton", coordinates: [-113.9067, 49.05] },
  ],
};

// Mapbox GL JS Mock - Replace with actual import
// const mapboxgl = {
//   accessToken: "",
//   Map: class {
//     constructor(options) {
//       this.options = options;
//       this.markers = [];
//       this.bounds = null;
//       setTimeout(() => this.onLoad && this.onLoad(), 100);
//     }

//     on(event, callback) {
//       if (event === "load") {
//         this.onLoad = callback;
//       }
//     }

//     fitBounds(bounds, options = {}) {
//       console.log("Fitting bounds:", bounds, options);
//       // Mock implementation
//     }

//     flyTo(options) {
//       console.log("Flying to:", options);
//     }

//     addMarker(marker) {
//       this.markers.push(marker);
//     }

//     removeMarkers() {
//       this.markers = [];
//     }
//   },

//   Marker: class {
//     constructor(options) {
//       this.options = options;
//       this.element = null;
//       this.popup = null;
//     }

//     setLngLat(coordinates) {
//       this.coordinates = coordinates;
//       return this;
//     }

//     setPopup(popup) {
//       this.popup = popup;
//       return this;
//     }

//     addTo(map) {
//       this.map = map;
//       map.addMarker(this);
//       return this;
//     }

//     remove() {
//       return this;
//     }
//   },

//   Popup: class {
//     constructor(options) {
//       this.options = options;
//     }

//     setHTML(html) {
//       this.html = html;
//       return this;
//     }
//   },

//   LngLatBounds: class {
//     constructor() {
//       this.bounds = [];
//     }

//     extend(coordinates) {
//       this.bounds.push(coordinates);
//       return this;
//     }

//     isEmpty() {
//       return this.bounds.length === 0;
//     }
//   },
// };

const CategoryButton = ({ icon: Icon, label, isActive, onClick, count }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200
      ${
        isActive
          ? "bg-gray-900 text-white border-gray-900 shadow-lg"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md"
      }
    `}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
    {count > 0 && (
      <span
        className={`
        text-xs px-2 py-1 rounded-full
        ${isActive ? "bg-white text-gray-900" : "bg-gray-200 text-gray-600"}
      `}
      >
        {count}
      </span>
    )}
  </button>
);

const InfoPanel = ({ point, onClose }) => {
  if (!point) return null;

  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm z-10">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-gray-900">{point.name}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl leading-none"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div>
          <strong>Coordinates:</strong> {point.coordinates[1].toFixed(4)}°N,{" "}
          {Math.abs(point.coordinates[0]).toFixed(4)}°W
        </div>

        {point.type && (
          <div>
            <strong>Type:</strong> {point.type}
          </div>
        )}

        {point.code && (
          <div>
            <strong>Airport Code:</strong> {point.code}
          </div>
        )}

        <div className="mt-3 p-2 bg-gray-50 rounded">
          <p className="text-xs text-gray-500">
            Click on different categories above to explore more locations across
            Western Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CanadaMapExplorer() {
  const [activeCategories, setActiveCategories] = useState(new Set());
  const [selectedPoint, setSelectedPoint] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  const categories = [
    { key: "cities", label: "Cities", icon: MapPin, data: mockData.cities },
    {
      key: "nationalParks",
      label: "National Parks",
      icon: TreePine,
      data: mockData.nationalParks,
    },
    {
      key: "skiResorts",
      label: "Ski Resorts",
      icon: Mountain,
      data: mockData.skiResorts,
    },
    {
      key: "airports",
      label: "International Airports",
      icon: Plane,
      data: mockData.airports,
    },
    {
      key: "unescoSites",
      label: "UNESCO National Historic Sites",
      icon: Globe,
      data: mockData.unescoSites,
    },
    {
      key: "biosphereReserves",
      label: "UNESCO Biosphere Reserves",
      icon: Leaf,
      data: mockData.biosphereReserves,
    },
  ];

  // Initialize Mapbox
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibmdvdGhhbmhiaW5oMjAwNCIsImEiOiJjbWMzN3pyNzkwMmNzMmlxeDY0Z295a3o2In0.N9r67mt54P8n6b91AyV-4w";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [-120, 52],
      zoom: 5,
    });

    map.on("load", () => {
      console.log("Map loaded");
    });

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  // Get marker color and icon based on category
  const getMarkerStyle = (categoryKey) => {
    const styles = {
      cities: { color: "#ef4444", icon: "mappin" },
      nationalParks: { color: "#10b981", icon: "tree" },
      skiResorts: { color: "#3b82f6", icon: "mountain" },
      airports: { color: "#8b5cf6", icon: "plane" },
      unescoSites: { color: "#eab308", icon: "globe" },
      biosphereReserves: { color: "#14b8a6", icon: "leaf" },
    };
    return styles[categoryKey] || { color: "#6b7280", icon: "mappin" };
  };

  // Create marker element
  const createMarkerElement = (categoryKey, point) => {
    const style = getMarkerStyle(categoryKey);
    const el = document.createElement("div");
    el.className = "marker";
    el.style.cssText = `
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${style.color};
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
      position: relative;
    `;

    // Add icon (you can replace with actual icons)
    el.innerHTML = `<div style="color: white; font-size: 14px; font-weight: bold;">●</div>`;

    // Create tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "marker-tooltip";
    tooltip.textContent = point.name;
    tooltip.style.cssText = `
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
    `;

    // Add arrow
    const arrow = document.createElement("div");
    arrow.style.cssText = `
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid rgba(0,0,0,0.8);
    `;
    tooltip.appendChild(arrow);
    el.appendChild(tooltip);

    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.1)";
      tooltip.style.opacity = "1";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
      tooltip.style.opacity = "0";
    });

    return el;
  };

  // Clear all markers
  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];
  };

  // Add markers for selected categories
  const addMarkers = (activeCategories) => {
    if (!mapRef.current) return;

    clearMarkers();

    const bounds = new mapboxgl.LngLatBounds();
    let hasPoints = false;

    activeCategories.forEach((categoryKey) => {
      const category = categories.find((c) => c.key === categoryKey);
      if (!category) return;

      category.data.forEach((point) => {
        const el = createMarkerElement(categoryKey, point);

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: [0, -40],
          closeButton: true,
          closeOnClick: false,
          anchor: "bottom",
        }).setHTML(`
          <div style="padding: 12px; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #333;">${
              point.name
            }</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">
              ${point.coordinates[1].toFixed(4)}°N, ${Math.abs(
          point.coordinates[0]
        ).toFixed(4)}°W
            </p>
            ${
              point.code
                ? `<p style="margin: 4px 0 0 0; font-size: 12px;"><strong>Code:</strong> ${point.code}</p>`
                : ""
            }
            ${
              point.type
                ? `<p style="margin: 4px 0 0 0; font-size: 12px;"><strong>Type:</strong> ${point.type}</p>`
                : ""
            }
          </div>
        `);

        // Create marker with proper anchor
        const marker = new mapboxgl.Marker({
          element: el,
          anchor: "center",
        })
          .setLngLat(point.coordinates)
          .setPopup(popup)
          .addTo(mapRef.current);

        // Add click event
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          setSelectedPoint(point);
          // Open popup on click
          popup.addTo(mapRef.current);
        });

        markersRef.current.push(marker);
        bounds.extend(point.coordinates);
        hasPoints = true;
      });
    });

    // Fit bounds to show all markers
    if (hasPoints && !bounds.isEmpty()) {
      mapRef.current.fitBounds(bounds, {
        padding: 100,
        maxZoom: 12,
        duration: 1000,
      });
    }
  };

  // Handle category toggle
  const handleCategoryToggle = (categoryKey) => {
    const newActiveCategories = new Set(activeCategories);

    if (newActiveCategories.has(categoryKey)) {
      newActiveCategories.delete(categoryKey);
    } else {
      newActiveCategories.add(categoryKey);
    }

    setActiveCategories(newActiveCategories);
  };

  // Update markers when active categories change
  useEffect(() => {
    if (mapRef.current) {
      addMarkers(activeCategories);
    }
  }, [activeCategories]);

  // Reset view when no categories selected
  useEffect(() => {
    if (activeCategories.size === 0 && mapRef.current) {
      mapRef.current.flyTo({
        center: [-120, 52],
        zoom: 5,
        duration: 1000,
      });
    }
  }, [activeCategories]);

  return (
    <div className="w-full h-screen bg-gray-100 relative overflow-hidden">
      {/* Add Mapbox CSS - Add this to your index.html or CSS imports */}
      <style>{`
        .mapboxgl-popup-content {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          padding: 0;
        }
        .mapboxgl-popup-tip {
          border-top-color: white;
        }
        .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
          border-bottom-color: white;
          border-top-color: transparent;
        }
        .marker-tooltip {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .mapboxgl-marker {
          cursor: pointer;
        }
      `}</style>

      {/* Category Buttons */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(({ key, label, icon, data }) => (
            <CategoryButton
              key={key}
              icon={icon}
              label={label}
              isActive={activeCategories.has(key)}
              onClick={() => handleCategoryToggle(key)}
              count={activeCategories.has(key) ? data.length : 0}
            />
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div id="map" className="w-full h-full"></div>

      {/* Info Panel */}
      <InfoPanel point={selectedPoint} onClose={() => setSelectedPoint(null)} />

      {/* Instructions */}
      {activeCategories.size === 0 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 max-w-md text-center z-10">
          <h3 className="font-bold text-gray-900 mb-2">
            Explore Western Canada
          </h3>
          <p className="text-gray-600 text-sm">
            Click on the category buttons above to discover cities, national
            parks, ski resorts, and more across British Columbia and Alberta.
          </p>
        </div>
      )}

      {/* Legend */}
      {activeCategories.size > 0 && (
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Legend</h4>
          <div className="space-y-1">
            {categories
              .filter((cat) => activeCategories.has(cat.key))
              .map(({ key, label, icon: Icon }) => (
                <div key={key} className="flex items-center gap-2 text-xs">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      key === "cities"
                        ? "bg-red-500"
                        : key === "nationalParks"
                        ? "bg-green-500"
                        : key === "skiResorts"
                        ? "bg-blue-500"
                        : key === "airports"
                        ? "bg-purple-500"
                        : key === "unescoSites"
                        ? "bg-yellow-500"
                        : "bg-teal-500"
                    }`}
                  >
                    <Icon size={8} className="text-white" />
                  </div>
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
