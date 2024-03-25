import { RouterProvider } from "react-router-dom";
import routerInstance from "./routes";

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={routerInstance}/>
        </div>
    )
};

export default App;