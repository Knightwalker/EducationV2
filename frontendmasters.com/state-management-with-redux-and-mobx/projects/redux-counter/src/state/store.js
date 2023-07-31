import { createStore } from "redux";

const ENUM_ACTION_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
}

const incrementValueAction = () => {
    return {
        type: ENUM_ACTION_TYPES.INCREMENT
    }
}

const decrementValueAction = () => {
    return {
        type: ENUM_ACTION_TYPES.DECREMENT
    }
}

const resetValueAction = () => {
    return {
        type: ENUM_ACTION_TYPES.RESET
    }
}

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === ENUM_ACTION_TYPES.INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (action.type === ENUM_ACTION_TYPES.DECREMENT) {
        return {
            ...state,
            count: state.count - 1
        }
    } else if (action.type === ENUM_ACTION_TYPES.RESET) {
        return Object.assign({}, initialState);
    } return state;
}

const store = createStore(reducer);

export default store;
export {
    incrementValueAction,
    decrementValueAction,
    resetValueAction
}