export class MapboxApi {
  static accessToken =
    "pk.eyJ1IjoiYm9sdC1kZW1vIiwiYSI6ImNsejhub2c5cDEzMDAzanB4bzE1NThkZGUifQ.HjXiWZZVUaYqKU8pxgMlLA";
  static baseUrl = "https://api.mapbox.com";

  // Lấy dữ liệu từ Mapbox Dataset
  static async getDatasetFeatures(datasetId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/datasets/v1/${datasetId}/features?access_token=${this.accessToken}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.features.map((feature) => ({
        id: feature.properties.id,
        name: feature.properties.name,
        coordinates: feature.geometry.coordinates,
        category: feature.properties.category,
        description: feature.properties.description || "",
        image: feature.properties.image,
      }));
    } catch (error) {
      console.error("Error fetching dataset features:", error);
      throw error;
    }
  }

  // Lấy dữ liệu từ Mapbox Tileset (Vector Tiles)
  static async getTilesetData(tilesetId, bounds) {
    try {
      // Sử dụng Mapbox Tilequery API để lấy features từ tileset
      const boundsParam = bounds ? `&bbox=${bounds.join(",")}` : "";
      const response = await fetch(
        `${this.baseUrl}/v4/${tilesetId}/tilequery/{lon},{lat}.json?access_token=${this.accessToken}${boundsParam}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data.features.map((feature) => ({
        id: feature.properties.id,
        name: feature.properties.name,
        coordinates: feature.geometry.coordinates,
        category: feature.properties.category,
        description: feature.properties.description || "",
        image: feature.properties.image,
      }));
    } catch (error) {
      console.error("Error fetching tileset data:", error);
      throw error;
    }
  }

  // Lọc features theo category từ map style
  static async getFeaturesByCategory(styleId, categories) {
    try {
      // Sử dụng Mapbox GL JS để query features từ rendered map
      // Điều này sẽ được thực hiện trong component MapView
      return [];
    } catch (error) {
      console.error("Error fetching features by category:", error);
      throw error;
    }
  }

  // Upload dữ liệu lên Mapbox Dataset
  static async uploadToDataset(datasetId, locations) {
    try {
      const features = locations.map((location) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: location.coordinates,
        },
        properties: {
          id: location.id,
          name: location.name,
          category: location.category,
          description: location.description,
          image: location.image || "",
        },
      }));

      const dataset = {
        type: "FeatureCollection",
        features,
      };

      const response = await fetch(
        `${this.baseUrl}/datasets/v1/${datasetId}/features?access_token=${this.accessToken}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataset),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error uploading to dataset:", error);
      throw error;
    }
  }
}
