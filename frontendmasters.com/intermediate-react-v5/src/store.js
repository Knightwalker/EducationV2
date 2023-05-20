import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice.js";
import searchParamsSlice from "./searchParamsSlice.js";
import { petApi } from "./petApiService.js";

const adoptedPetReducer = adoptedPetSlice.reducer;
const searchParamsReducer = searchParamsSlice.reducer;

const store = configureStore({
    reducer: {
        adoptedPetReducer: adoptedPetReducer,
        searchParamsReducer: searchParamsReducer,
        [petApi.reducerPath]: petApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petApi.middleware)
});

export default store;