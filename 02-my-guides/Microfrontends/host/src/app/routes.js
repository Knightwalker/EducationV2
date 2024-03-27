import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Modules from Module Federation Plugin
const LandingModule = lazy(() => import("./modules/LandingModule/LandingModule"));
const DashboardModule = lazy(() => import("./modules/DashboardModule/DashboardModule"));

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <LandingModule />,
    },
    {
        path: "/dashboard",
        element: <DashboardModule />,
    },
]);

export default routerInstance;