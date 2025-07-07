import { locations } from "../data/locations";

// Mock API service - in production, this would call your actual API
export class LocationApi {
  static baseUrl = "https://api.canadaexplorer.com/v1";

  static async getLocationsByCategory(category) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would make an actual HTTP request:
    // const response = await fetch(`${this.baseUrl}/locations?category=${category}`);
    // return response.json();

    // Mock response for demonstration
    return this.getMockLocations().filter(
      (location) => location.category === category
    );
  }

  static async getAllLocations() {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));

    // In production:
    // const response = await fetch(`${this.baseUrl}/locations`);
    // return response.json();

    return this.getMockLocations();
  }

  static async getLocationById(id) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 200));

    // In production:
    // const response = await fetch(`${this.baseUrl}/locations/${id}`);
    // return response.json();

    const locations = this.getMockLocations();
    return locations.find((location) => location.id === id) || null;
  }

  static getMockLocations() {
    return [
      // Cities
      {
        id: "vancouver",
        name: "Vancouver",
        coordinates: [-123.1207, 49.2827],
        category: "cities",
        description: "Beautiful coastal city surrounded by mountains",
        image:
          "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
      },
      {
        id: "toronto",
        name: "Toronto",
        coordinates: [-79.3832, 43.6532],
        category: "cities",
        description: "Canada's largest city and financial center",
        image:
          "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
      },
      {
        id: "montreal",
        name: "Montreal",
        coordinates: [-73.5673, 45.5017],
        category: "cities",
        description: "Historic city known for its European charm",
        image:
          "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
      },
      // National Parks
      {
        id: "banff",
        name: "Banff National Park",
        coordinates: [-115.5708, 51.4968],
        category: "national-parks",
        description: "Canada's first national park in the Rocky Mountains",
        image:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      },
      {
        id: "jasper",
        name: "Jasper National Park",
        coordinates: [-118.0814, 52.8737],
        category: "national-parks",
        description: "Dark Sky Preserve with stunning mountain scenery",
        image:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      },
      // Ski Resorts
      {
        id: "whistler",
        name: "Whistler Blackcomb",
        coordinates: [-122.9574, 50.1163],
        category: "ski-resorts",
        description: "World-class ski resort, host of 2010 Winter Olympics",
        image:
          "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg",
      },
    ];
  }
}
