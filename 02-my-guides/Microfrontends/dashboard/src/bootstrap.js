import { createRoot } from "react-dom/client";
import App from "./app/App";

const mount = ({ el }) => {
    const root = createRoot(el);
    root.render(<App />);
};

// Running in ISOLATION
const root = document.getElementById("dashboard-root");
if (root) {
    mount({ el: root });
}

export { mount };