// Map utility functions
export const fitBoundsToActiveCategories = (map, places, activeCategories) => {
  if (!map || !window.mapboxgl || activeCategories.length === 0) return;

  const activePlaces = places.features.filter((feature) =>
    activeCategories.includes(feature.properties.category)
  );

  if (activePlaces.length === 0) return;

  if (activePlaces.length === 1) {
    // Single place - fly to it
    const coords = activePlaces[0].geometry.coordinates;
    map.flyTo({
      center: coords,
      zoom: 5,
      duration: 500,
    });
  } else {
    // Multiple places - calculate bounds
    const coordinates = activePlaces.map(
      (feature) => feature.geometry.coordinates
    );
    let minLng = coordinates[0][0];
    let maxLng = coordinates[0][0];
    let minLat = coordinates[0][1];
    let maxLat = coordinates[0][1];

    coordinates.forEach(([lng, lat]) => {
      minLng = Math.min(minLng, lng);
      maxLng = Math.max(maxLng, lng);
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
    });
    if (
      !isFinite(minLng) ||
      !isFinite(maxLng) ||
      !isFinite(minLat) ||
      !isFinite(maxLat)
    ) {
      console.error("Invalid bounds values", {
        minLng,
        maxLng,
        minLat,
        maxLat,
      });
      return;
    }
    // Add buffer to bounds
    const lngRange = maxLng - minLng;
    const latRange = maxLat - minLat;
    const buffer = Math.max(lngRange, latRange) * 0.3;
    const sw = { lng: minLng - buffer, lat: minLat - buffer };
    const ne = { lng: maxLng + buffer, lat: maxLat + buffer };

    const bounds = new window.mapboxgl.LngLatBounds(sw, ne);

    try {
      map.fitBounds(bounds, {
        padding: { top: 120, bottom: 80, left: 80, right: 80 },
        duration: 500,
        maxZoom: 10,
        linear: false,
      });
    } catch (error) {
      // console.error("Error fitting bounds:", error);
      const centerLng = (minLng + maxLng) / 2;
      const centerLat = (minLat + maxLat) / 2;
      map.flyTo({
        center: [centerLng, centerLat],
        zoom: 5.2,
        duration: 500,
      });
    }
  }
};

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

export const initializeMapbox = (container, config) => {
  if (!window.mapboxgl) return null;

  window.mapboxgl.accessToken = config.accessToken;

  return new window.mapboxgl.Map({
    container: container,
    style: config.style,
    center: config.center,
    zoom: config.zoom,
    maxBounds: config.canadaBounds,
    minZoom: config.minZoom,
    maxZoom: config.maxZoom,
    scrollZoom: { ctrl: true },
    cooperativeGestures: true,
  });
};
