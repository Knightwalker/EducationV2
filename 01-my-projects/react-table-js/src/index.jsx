import React from "react";
import { createRoot } from "react-dom/client";
import BasicTableWithPagination from "./components/BasicTableWithPagination/BasicTableWithPagination.jsx";
import BasicTableWithGlobalFilter from "./components/BasicTableWithGlobalFilter/BasicTableWithGlobalFilter.jsx";
import BasicTableWithSelect from "./components/BasicTableWithSelect/BasicTableWithSelect.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <div>
        <BasicTableWithSelect />
    </div>
    // </React.StrictMode>
);