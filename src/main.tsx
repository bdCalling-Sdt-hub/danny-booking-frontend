import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";
import { themeProvider } from "./lib/theme/theme.ts";
import { router } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster richColors />
    <ConfigProvider theme={themeProvider}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
