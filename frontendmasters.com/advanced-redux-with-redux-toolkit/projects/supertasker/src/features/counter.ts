import { createAction } from "@reduxjs/toolkit";

type CounterState = { count: number }
type CounterAction = 
| { type: "INCREMENT" | "DECREMENT"; payload: number } 
| { type: "RESET" }

const increment = createAction("INCREMENT", (amount: number) => {
    return {
        payload: amount
    }
});
// const incrementAction = increment(2);
// increment.type

export const reducer = (state: CounterState, action: CounterAction) => {
    if (action.type === increment.type) {
        return { count: state.count + action.payload }
    }

    if (action.type === "DECREMENT") {
        return { count: state.count - action.payload }
    }
    
    if (action.type === "RESET") {
        return { count: 0 }
    }

    return state;
};