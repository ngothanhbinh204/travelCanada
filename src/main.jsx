import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/index";

import "./index.css";
import "./output.css";

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    await worker.start();
    console.log("✅ MSW started");
  }

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
prepare();
