import { createSlice } from "@reduxjs/toolkit";

const adoptedPetSlice = createSlice({
    name: "adoptedPet",
    initialState: {
        value: null
    },
    reducers: {
        adopt: (state, action) => {
            state.value = action.payload;
        },
        unadopt: (state) => {
            state.value = null;
        }
    }
});

export default adoptedPetSlice;