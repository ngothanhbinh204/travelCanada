export const DataThingTodo = {
  filters: [
    {
      slug: "province",
      displayName: "Provinces and territories",
      options: [
        "Ontario",
        "Quebec",
        "British Columbia",
        "Alberta",
        "Nova Scotia",
        "New Brunswick",
        "Manitoba",
        "Saskatchewan",
        "Yukon",
      ],
    },
    {
      slug: "theme",
      displayName: "Themes",
      options: [
        "Attractions",
        "Festivals and entertainment",
        "Food and drink",
        "Outdoor activities",
        "Natural wonders",
        "Wildlife",
        "History and heritage",
      ],
    },
    {
      slug: "season",
      displayName: "Sesasons",
      options: ["Spring", "Summer", "Fall", "Winter", "All seasons"],
    },
  ],
  data: [
    {
      id: 1,
      title: "Ontario Winter Guide",
      image: "images/img_blog.webp",
      province: "Ontario",
      theme: "Outdoor activities",
      season: "Winter",
    },
    {
      id: 2,
      image: "images/img_blog.webp",

      title: "Quebec City Carnival",
      province: "Quebec",
      theme: "Festivals and entertainment",
      season: "Winter",
    },
    {
      id: 3,
      image: "images/img_blog.webp",

      title: "BC Hiking Trails",
      province: "British Columbia",
      theme: "Outdoor activities",
      season: "Summer",
    },
    {
      id: 4,
      image: "images/img_blog.webp",

      title: "Yukon Northern Lights",
      province: "Yukon",
      theme: "Natural wonders",
      season: "Winter",
    },
  ],
};
