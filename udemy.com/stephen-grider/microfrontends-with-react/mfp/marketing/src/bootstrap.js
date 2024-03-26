import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history}/>, el);

    return {
        onParentNavigate(location) {
            const nextPathname = location.pathname;
            const currPathname = history.location.pathname;
            if (currPathname === nextPathname) {
                return;
            }
            history.push(nextPathname);
        }
    };
};

if (process.env.NODE_ENV === "development") {
    const root = document.querySelector("#_marketing-root");

    if (root) {
        mount(root, { 
            defaultHistory: createBrowserHistory() 
        });
    }
}

export { mount };