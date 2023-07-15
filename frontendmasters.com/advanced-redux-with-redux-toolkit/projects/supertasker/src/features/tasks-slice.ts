import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

export type TasksState = {
    entities: Task[]
}

type DraftTask = RequireOnly<Task, "title">

const createTask = (draftTask: DraftTask): Task => {
    return { id: nanoid(), ...draftTask }
}

const initialState: TasksState = {
    entities: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const task = createTask(action.payload);
            state.entities.unshift(task)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            const index = state.entities.findIndex(x => x.id === action.payload);
            state.entities.splice(index, 1);
        }
    }
});

const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
export {
    addTask,
    removeTask
}