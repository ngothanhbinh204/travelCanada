// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Main layout content */}
      <Outlet />
    </div>
  );
}
