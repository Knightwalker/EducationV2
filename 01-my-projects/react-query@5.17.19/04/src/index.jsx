import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";

const client = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
    </QueryClientProvider>
    // </React.StrictMode>
);