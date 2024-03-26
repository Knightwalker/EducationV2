import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/Marketing";

const MarketingApp = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: (location) => {
                const nextPathname = location.pathname;
                const currPathname = history.location.pathname;
                if (currPathname === nextPathname) {
                    return;
                }
                history.push(nextPathname);
            }
        });
        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={ref} />
    );
};

export default MarketingApp;