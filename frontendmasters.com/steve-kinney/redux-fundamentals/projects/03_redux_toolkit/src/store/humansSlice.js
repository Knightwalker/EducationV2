import { createSlice, current, nanoid } from "@reduxjs/toolkit"
import { tasksSlice } from "./tasksSlice";

const createHuman = (name) => {
    return {
        id: nanoid(),
        name: name,
        taskIds: []
    }
}

const initialState = [createHuman("Steve"), createHuman("Mark")];

export const humansSlice = createSlice({
    name: "humans",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.push(createHuman(action.payload));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(tasksSlice.actions.assignToUser, (state, action) => {
            for (const human of state) {
                console.log(current(human));
                if (human.id === action.payload.humanId) {
                    human.taskIds.push(action.payload.taskId);
                } else {
                    human.taskIds = human.taskIds.filter(id => id !== action.payload.taskId);
                }
            }
        });
    }
});