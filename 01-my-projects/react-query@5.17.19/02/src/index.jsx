import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const client = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={client}>
        <App/>
    </QueryClientProvider>
    // </React.StrictMode>
);