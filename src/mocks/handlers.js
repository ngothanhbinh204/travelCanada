import { http, HttpResponse } from "msw";
import { menuItems } from "../data/menuItems";
import { sliderItems } from "../data/sliderItems";
import { dataInteractiveMap } from "../data/dataInteractiveMap";

export const handlers = [
  http.get("/api/menu", () => {
    return HttpResponse.json(menuItems);
  }),
  http.get("/api/slider", () => {
    return HttpResponse.json(sliderItems);
  }),
  http.get("/api/interactive-map", () => {
    return HttpResponse.json(dataInteractiveMap);
  }),
];
