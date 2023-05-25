import {
    createStore,
    compose,
    applyMiddleware,
    bindActionCreators,
    combineReducers
} from "redux";

const reducer = (state = { counter: 1 }, action) => {
    if (action.type === "test") {
        const counter = state.counter + 1;
        return {...state, counter: counter };
    }
    return state;
};

const loggingMiddleware = store => next => action => {
    console.log('old state', store.getState())
    next(action)
    console.log('new state', store.getState())
}

const monitorMiddleware = store => next => action => {
    const start = performance.now();
    next(action);
    const end = performance.now();
    const diff = end - start;
    console.log(diff);
}

const store = createStore(reducer, applyMiddleware(loggingMiddleware, monitorMiddleware))
store.dispatch({ type: "test" });