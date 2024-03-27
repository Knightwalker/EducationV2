import { useEffect, useRef } from "react";
import { mount } from "DashboardModule/App";
import "./DashboardModule.css";

const DashboardModule = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount({ el: ref.current });
    }, []);

    return (
        <div className="DashboardModuleRoot" ref={ref} />
    )
}

export default DashboardModule;