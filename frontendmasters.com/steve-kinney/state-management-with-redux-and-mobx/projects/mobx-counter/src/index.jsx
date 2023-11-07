import { createRoot } from "react-dom/client";
import { autorun } from "mobx";
import { Provider } from "mobx-react";
import CounterStore from "./state/counterStore";
import App from "./App";
import "./styles/index.scss";

const counterStore = new CounterStore();

autorun(() => console.log('The count changed!', counterStore.value));

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider counterStore={counterStore}>
        <App />
    </Provider>
);