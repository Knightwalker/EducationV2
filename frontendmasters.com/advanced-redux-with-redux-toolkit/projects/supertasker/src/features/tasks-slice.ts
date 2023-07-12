import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TasksState = {
    entities: Task[]
}

const initialState: TasksState = {
    entities: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.entities.unshift(action.payload)
        },
        removeTask: (state) => state,
    }
});