import { RouterProvider } from "react-router-dom";
import appRouterInstance from "./App.routes";

const VITE_SOME_KEY = import.meta.env.VITE_SOME_KEY;

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={appRouterInstance} />
            {VITE_SOME_KEY}
        </div>
    )
}

export default App;