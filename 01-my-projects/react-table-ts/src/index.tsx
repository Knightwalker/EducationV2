import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExampleUsage from "./components/BasicTable/ExampleUsage";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <StrictMode>
    <div className="App">
        <ExampleUsage />
    </div>
    // </StrictMode>
);