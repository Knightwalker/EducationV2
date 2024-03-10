import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);