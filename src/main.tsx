import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./routes/routes.tsx";
import { useAuthStore } from "@/stores/auth";
import "material-symbols/outlined.css";

useAuthStore.getState().hydrate();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
