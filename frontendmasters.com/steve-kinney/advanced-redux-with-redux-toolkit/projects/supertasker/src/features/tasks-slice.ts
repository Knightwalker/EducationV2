import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";
// import data from "../api/data.json";
import { removeUser } from "./users-slice";

export type TasksState = {
    entities: Task[],
    loading?: boolean
}

type DraftTask = RequireOnly<Task, "title">

const createTask = (draftTask: DraftTask): Task => {
    return { id: nanoid(), ...draftTask }
}

const initialState: TasksState = {
    // entities: data.tasks
    entities: [],
    loading: false
}

const fetchTasks = createAsyncThunk("tasks/fetchTasks", async(thunkApi): Promise<Task[]> => {
    const response = await fetch("/api/tasks")
    const result = await response.json();
    return result.tasks;
});

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
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            const userId = action.payload;
            for (const task of state.entities) {
                if (task.user === userId) {
                    task.user = null
                }
            }
        });
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.entities = action.payload
            state.loading = false;
        });
    }    
});

const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
export {
    addTask,
    removeTask,
    createTask,
    fetchTasks
}