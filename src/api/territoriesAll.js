export const territoriesAll = [
  {
    id: "bc",
    name: "British Columbia",
    category: "province",
    boundary: "/GeoJson/british_columbia.geojson",
    image: "images/image_test.webp",
    linkDetail: "#",
    linkOffer: "#",
    linkOther: "#",
    center: [-123.5, 53.7],
    zoom: 5,
    description:
      "Wellness is a way of life on the West Coast. Coastal islands, forest trails, vineyards and beaches all fold into the everyday in BC. You can start your day skiing and be back in Vancouver for fresh sushi by lunch (it’s the birthplace of the California roll, after all). The pace is easy, the locals are friendly, and no matter the city, nature’s always nearby. From rainforest to Rockies, there’s no need to pick a lane—people make time for the trail and the hot tub. Sometimes back-to-back.",
    points: [
      {
        id: "vancouver",
        name: "Vancouver",
        coordinates: [-123.1207, 49.2827],
        category: "city",
        description: "Vancouver is a bustling west coast seaport.",
      },
      {
        id: "victoria",
        name: "Victoria",
        coordinates: [-123.3656, 48.4284],
        category: "city",
        description: "Victoria is the capital of British Columbia.",
      },
      {
        id: "kelowna",
        name: "Kelowna",
        coordinates: [-119.496, 49.888],
        category: "city",
        description: "Kelowna is known for its wine country and lake views.",
      },
    ],
  },
  {
    id: "alberta",
    name: "Alberta",
    category: "province",

    boundary: "/GeoJson/alberta.geojson",
    center: [-115.0, 54.0],
    zoom: 5,
    description:
      "Alberta is famous for the Rocky Mountains and Banff National Park.",
    points: [
      {
        id: "calgary",
        name: "Calgary",
        coordinates: [-114.0719, 51.0447],
        category: "city",
        description:
          "Calgary is a cosmopolitan Alberta city with numerous skyscrapers.",
      },
      {
        id: "banff",
        name: "Banff",
        coordinates: [-115.5708, 51.1784],
        category: "park",
        description: "Banff is a resort town within Banff National Park.",
      },
    ],
  },
];

export const mapConfig = {
  accessToken:
    "pk.eyJ1IjoibmdvdGhhbmhiaW5oMjAwNCIsImEiOiJjbWMzN3pyNzkwMmNzMmlxeDY0Z295a3o2In0.N9r67mt54P8n6b91AyV-4w",
  center: [-100.1207, 52.0],
  //   center: [-126.99786035133785, 49.23038358187074],
  zoom: 3,
  minZoom: 2,
  maxZoom: 6,
  canadaBounds: [
    [-141.0, 41.7],
    [-52.6, 83.1],
  ],

  // style: "mapbox://styles/mapbox/light-v11",
  style: "mapbox://styles/ngothanhbinh2004/cmcsgjw4500hu01s7d3czhtv2",
  cooperativeGestures: true,
};
