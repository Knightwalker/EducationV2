// Libs
import { RouteObject } from "react-router-dom";

// Modules
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";

const homeRoutes: RouteObject[] = [
    {
        path: "",
        element: <Dashboard />
    },
    {
        path: "about",
        element: <About />
    }
]

export default homeRoutes;
