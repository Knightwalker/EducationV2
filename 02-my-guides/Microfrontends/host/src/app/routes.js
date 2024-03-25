import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Modules from Module Federation Plugin
const LandingModule = lazy(() => import("LandingModule/App"));

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <LandingModule/>
    }
])

export default routerInstance;