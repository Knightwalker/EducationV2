import { configureStore } from "@reduxjs/toolkit";
import { itemApi } from "./services/api-service";

const store = configureStore({
    reducer: {
        [itemApi.reducerPath]: itemApi.reducer
    },
    middleware: (gDM) => gDM().concat(itemApi.middleware)
});

export default store;