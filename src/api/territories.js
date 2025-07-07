export const dataTerritories = {
  id: "british_columbia",
  name: "British Columbia",
  mapConfig: {
    accessToken:
      "pk.eyJ1IjoibmdvdGhhbmhiaW5oMjAwNCIsImEiOiJjbWMzN3pyNzkwMmNzMmlxeDY0Z295a3o2In0.N9r67mt54P8n6b91AyV-4w",
    center: [-123.1207, 52.0],
    zoom: 5.5,
  },
  boundary: "/GeoJson/british_columbia.geojson",
  adjacents: [
    {
      id: "alberta",
      name: "Alberta",
      boundary: "/GeoJson/alberta.geojson",

      link: "/territories/alberta",
    },
    {
      id: "yukon",
      name: "Yukon",
      boundary: "/GeoJson/Yukon.geojson",
      link: "/territories/yukon",
    },
  ],
  categories: [
    { id: "cities", label: "Cities", color: "red", icon: "city" },
    {
      id: "national_parks",
      label: "National Parks",
      color: "#083026",
      icon: "moutain",
    },
    {
      id: "ski_resorts",
      label: "Ski Resorts",
      color: "#b9e0fa",
      icon: "resort",
    },
    {
      id: "international_airports",
      label: "International Airports",
      color: "#fcdb44",
      icon: "airplane",
    },
    {
      id: "unesco_historic",
      label: "UNESCO National Historic Sites",
      color: "#d5dbf0",
      icon: "bank2",
    },
    {
      id: "unesco_biosphere",
      label: "UNESCO Biosphere Reserves",
      color: "#add9ca",
      icon: "leaf",
    },
  ],
  places: {
    type: "FeatureCollection",
    features: [
      // Cities
      {
        type: "Feature",
        properties: {
          category: "cities",
          name: "Vancouver",
          description:
            "British Columbia's largest city, known for its natural beauty and cultural diversity.",
          icon: "city",
        },
        geometry: { type: "Point", coordinates: [-123.1207, 49.2827] },
      },
      {
        type: "Feature",
        properties: {
          category: "cities",
          name: "Victoria",
          description:
            "The capital city of British Columbia, famous for its British colonial architecture.",
          icon: "city",
        },
        geometry: { type: "Point", coordinates: [-123.3656, 48.4284] },
      },
      {
        type: "Feature",
        properties: {
          category: "cities",
          name: "Kelowna",
          description:
            "A beautiful city in the Okanagan Valley, known for its wineries and lakes.",
          icon: "city",
        },
        geometry: { type: "Point", coordinates: [-119.496, 49.888] },
      },
      {
        type: "Feature",
        properties: {
          category: "cities",
          name: "Prince George",
          description:
            "The largest city in northern British Columbia, gateway to the northern wilderness.",
          icon: "city",
        },
        geometry: { type: "Point", coordinates: [-122.7497, 53.9171] },
      },
      // National Parks
      {
        type: "Feature",
        properties: {
          category: "national_parks",
          name: "Banff National Park",
          description:
            "Canada's first national park, featuring stunning Rocky Mountain scenery.",
          icon: "moutain",
        },
        geometry: { type: "Point", coordinates: [-115.5708, 51.4968] },
      },
      {
        type: "Feature",
        properties: {
          category: "national_parks",
          name: "Jasper National Park",
          description:
            "The largest national park in the Canadian Rockies, known for its wildlife and glaciers.",
          icon: "moutain",
        },
        geometry: { type: "Point", coordinates: [-117.9543, 52.8734] },
      },
      {
        type: "Feature",
        properties: {
          category: "national_parks",
          name: "Yoho National Park",
          description:
            "Famous for its waterfalls, fossils, and dramatic mountain landscapes.",
          icon: "moutain",
        },
        geometry: { type: "Point", coordinates: [-116.4453, 51.4968] },
      },
      {
        type: "Feature",
        properties: {
          category: "national_parks",
          name: "Pacific Rim National Park",
          description:
            "Coastal rainforest and rugged Pacific coastline on Vancouver Island.",
          icon: "moutain",
        },
        geometry: { type: "Point", coordinates: [-125.7751, 49.0158] },
      },
      // Ski Resorts
      {
        type: "Feature",
        properties: {
          category: "ski_resorts",
          name: "Whistler Blackcomb",
          description:
            "World-renowned ski resort and host of 2010 Winter Olympics alpine events.",
          icon: "resort",
        },
        geometry: { type: "Point", coordinates: [-122.9574, 50.1163] },
      },
      {
        type: "Feature",
        properties: {
          category: "ski_resorts",
          name: "Sun Peaks Resort",
          description:
            "Canada's second-largest ski area with diverse terrain and village atmosphere.",
          icon: "resort",
        },
        geometry: { type: "Point", coordinates: [-119.8848, 50.8848] },
      },
      {
        type: "Feature",
        properties: {
          category: "ski_resorts",
          name: "Big White Ski Resort",
          description:
            "Known for its champagne powder snow and family-friendly atmosphere.",
          icon: "resort",
        },
        geometry: { type: "Point", coordinates: [-118.9511, 49.7308] },
      },
      // International Airports
      {
        type: "Feature",
        properties: {
          category: "international_airports",
          name: "Vancouver International Airport",
          description:
            "Canada's second-busiest airport, serving the Greater Vancouver area.",
          icon: "airplane",
        },
        geometry: { type: "Point", coordinates: [-123.184, 49.1967] },
      },
      {
        type: "Feature",
        properties: {
          category: "international_airports",
          name: "Victoria International Airport",
          description:
            "The main airport serving Victoria and southern Vancouver Island.",
          icon: "airplane",
        },
        geometry: { type: "Point", coordinates: [-123.4261, 48.6469] },
      },
      // UNESCO Historic Sites
      {
        type: "Feature",
        properties: {
          category: "unesco_historic",
          name: "Head-Smashed-In Buffalo Jump",
          description:
            "Archaeological site demonstrating indigenous hunting practices over 5,500 years.",
          icon: "bank2",
        },
        geometry: { type: "Point", coordinates: [-113.6186, 49.7489] },
      },
      {
        type: "Feature",
        properties: {
          category: "unesco_historic",
          name: "Burgess Shale",
          description:
            "World-famous fossil site in Yoho National Park with 508-million-year-old specimens.",
          icon: "bank2",
        },
        geometry: { type: "Point", coordinates: [-116.4708, 51.4392] },
      },
      // UNESCO Biosphere Reserves
      {
        type: "Feature",
        properties: {
          category: "unesco_biosphere",
          name: "Clayoquot Sound",
          description:
            "Coastal temperate rainforest biosphere reserve on Vancouver Island.",
          icon: "leaf",
        },
        geometry: { type: "Point", coordinates: [-125.906, 49.15] },
      },
      {
        type: "Feature",
        properties: {
          category: "unesco_biosphere",
          name: "Mount Arrowsmith",
          description:
            "Biosphere reserve featuring old-growth forests and diverse ecosystems.",
          icon: "leaf",
        },
        geometry: { type: "Point", coordinates: [-124.6333, 49.1667] },
      },
    ],
  },
};
