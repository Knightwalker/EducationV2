import { createAction, createSlice, current, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => {
    return {
        id: nanoid(),
        title: title,
        completed: false,
        assignedTo: ""
    }
}

const initialState = [
    createTask("Order more energy drinks"),
    createTask("Water the plants")
];

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            const task = createTask(action.payload);
            state.push(task);
        },
        toggle: (state, action) => {
            const task = state.find((task) => task.id === action.payload.taskId);
            task.completed = action.payload.completed;
        },
        assignToUser: (state, action) => {
            const task = state.find((task) => task.id === action.payload.taskId);
            task.assignedTo = action.payload.humanId;
        }
    }
});

export const toggleTask = createAction("tasks/toggle", (taskId, completed) => {
    return {
        payload: {
            taskId: taskId,
            completed: completed
        }
    }
});