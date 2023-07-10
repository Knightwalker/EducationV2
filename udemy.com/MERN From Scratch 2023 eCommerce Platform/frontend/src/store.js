import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (gDM) => gDM().concat(apiSlice.middleware),
    devTools: true
});

export default store;