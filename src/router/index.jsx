import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PlacesToGo from "../pages/PlacesToGo";
import ThingsToDo from "../pages/ThingsToDo";
import SinglePlaceToGo from "../pages/singlePlacesToGo";
import ArticlesThingToDo from "../pages/ArticlesThingToDo";
import PlanYourTrip from "../pages/PlanYourTrip";
import CommingTo from "../pages/CommingTo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="places-to-go" element={<PlacesToGo />} />
          <Route path="things-to-do" element={<ThingsToDo />} />
          <Route path="single-places-to-go" element={<SinglePlaceToGo />} />
          <Route path="articles-things-to-do" element={<ArticlesThingToDo />} />
          <Route path="plan-your-trip" element={<PlanYourTrip />} />
          <Route path="coming-to" element={<CommingTo />} />
        </Route>
      </Routes>
    </Router>
  );
}
