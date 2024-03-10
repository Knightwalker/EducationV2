// Libs
import { createBrowserRouter } from "react-router-dom";

// Modules
import Auth from "@modules/Auth/Auth";
import Home from "@modules/Home/Home";
import User from "@modules/User/User";

// Routes
import homeRoutes from "@modules/Home/Home.routes";

const appRouterInstance = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: homeRoutes
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/user",
        element: <User />
    },
    {
        path: "/*",
        element: <div>Not Found</div>
    }
]);

export default appRouterInstance;
