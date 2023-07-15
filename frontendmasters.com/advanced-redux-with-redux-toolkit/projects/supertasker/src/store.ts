import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks-slice";
import usersSlice from "./features/users-slice";

const store = configureStore({
    reducer: {
        [tasksSlice.name]: tasksSlice.reducer,
        [usersSlice.name]: usersSlice.reducer
    }
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;
 
export default store;