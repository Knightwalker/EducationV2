import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>Hello from Home Module</p>
            <Outlet />
        </div>
    )
}

export default Home;