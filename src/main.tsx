import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeChangerProvider } from "./theme/ThemeChanger";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeChangerProvider>
      <App />
    </ThemeChangerProvider>
  </React.StrictMode>
);
