// Map Layer Manager Class
class MapLayerManager {
  constructor(map, categories, places) {
    this.map = map;
    this.categories = categories;
    this.places = places;
  }

  addSource() {
    if (!this.map.getSource("places")) {
      this.map.addSource("places", {
        type: "geojson",
        data: this.places,
      });
    }
  }

  addLayers(onHover, onMouseMove, onMouseLeave, onClick) {
    this.categories.forEach((category) => {
      const layerId = `places-${category.id}`;
      if (!this.map.getLayer(layerId)) {
        this.map.addLayer({
          id: layerId,
          type: "circle",
          source: "places",
          filter: ["==", "category", category.id],
          layout: {
            visibility: "none",
          },
          paint: {
            "circle-radius": 16,
            "circle-color": category.color,
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2,
            "circle-opacity": 0.9,
          },
        });

        // Add icon layer for better visual representation
        const iconLayerId = `places-icon-${category.id}`;
        if (!this.map.getLayer(iconLayerId)) {
          this.map.addLayer({
            id: iconLayerId,
            type: "symbol",
            source: "places",
            filter: ["==", "category", category.id],
            layout: {
              visibility: "none",
              // "icon-image": this.getMapboxIcon(category.id),
              "icon-image": ["get", "icon"],
              "icon-size": 0.9,
              "icon-allow-overlap": true,
            },
          });
        }

        // Event handlers
        this.map.on("mouseenter", layerId, onHover);
        this.map.on("mousemove", layerId, onMouseMove);
        this.map.on("mouseleave", layerId, onMouseLeave);
        this.map.on("click", layerId, onClick);
      }
    });
  }

  loadIcons() {
    const iconMap = {
      city: "/images/city.png",
      airplane: "/images/airplane.png",
      moutain: "/images/moutain.png",
      resort: "/images/resort.png",
      bank2: "/images/bank2.png",
      leaf: "/images/leaf.png",
    };

    Object.entries(iconMap).forEach(([key, url]) => {
      if (!this.map.hasImage(key)) {
        this.map.loadImage(url, (error, image) => {
          if (error) {
            console.error("Error loading icon:", key, error);
            return;
          }
          if (!this.map.hasImage(key)) {
            this.map.addImage(key, image);
          }
        });
      }
    });
  }

  // getMapboxIcon(categoryId) {
  //   const iconMap = {
  //     cities: "city-15",
  //     national_parks: "park-15",
  //     ski_resorts: "skiing-15",
  //     international_airports: "airport-15",
  //     unesco_historic: "monument-15",
  //     unesco_biosphere: "garden-15",
  //   };
  //   return iconMap[categoryId] || "marker-15";
  // }

  updateLayerVisibility(activeCategories) {
    this.categories.forEach((category) => {
      const layerId = `places-${category.id}`;
      const iconLayerId = `places-icon-${category.id}`;
      const visibility = activeCategories.includes(category.id)
        ? "visible"
        : "none";

      if (this.map.getLayer(layerId)) {
        this.map.setLayoutProperty(layerId, "visibility", visibility);
      }
      if (this.map.getLayer(iconLayerId)) {
        this.map.setLayoutProperty(iconLayerId, "visibility", visibility);
      }
    });
  }

  // Add boundary

  addBoundaryLayer(geojsonData) {
    if (!this.map.getSource("bc-boundary")) {
      this.map.addSource("bc-boundary", {
        type: "geojson",
        data: geojsonData,
      });
    }

    if (!this.map.getLayer("bc-boundary-line")) {
      this.map.addLayer({
        id: "bc-boundary-line",
        type: "line",
        source: "bc-boundary",
        paint: {
          "line-color": "#ec2f00",
          "line-width": 2,
        },
      });
    }

    if (!this.map.getLayer("bc-boundary-fill")) {
      this.map.addLayer({
        id: "bc-boundary-fill",
        type: "fill",
        source: "bc-boundary",
        paint: {
          "fill-color": "#ec2f00",
          "fill-opacity": 0.1,
        },
      });
    }
  }
}

export default MapLayerManager;
