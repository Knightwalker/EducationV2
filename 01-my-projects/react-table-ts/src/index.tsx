import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BasicTable from "./components/BasicTable/BasicTable";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <StrictMode>
    <div className="App">
        <BasicTable />
    </div>
    // </StrictMode>
);