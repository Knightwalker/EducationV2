import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks-slice";

const store = configureStore({
    reducer: {
        [tasksSlice.name]: tasksSlice.reducer
    }
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;
 
export default store;