import { useEffect, useRef } from "react";
import { mount } from "LandingModule/App";
import "./LandingModule.css";

const LandingModule = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount({ el: ref.current });
    }, []);

    return (
        <div className="LandingModuleRoot" ref={ref} />
    )
}

export default LandingModule;