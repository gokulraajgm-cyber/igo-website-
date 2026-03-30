import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { injectCSSVariables } from "./lib/css-variables";

// Inject theme CSS custom properties before first render
injectCSSVariables();

createRoot(document.getElementById("root")!).render(<App />);
