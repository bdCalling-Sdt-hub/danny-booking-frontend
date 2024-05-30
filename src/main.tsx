import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "./index.css";
import { themeProvider } from "./lib/theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster richColors />
    <ConfigProvider theme={themeProvider}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
