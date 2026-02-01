import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./routes/routes.tsx";
// Hoặc nếu bạn chỉ muốn bản Outlined để nhẹ app:
import "material-symbols/outlined.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
