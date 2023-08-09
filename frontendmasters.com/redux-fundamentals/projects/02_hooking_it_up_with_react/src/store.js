import { createStore, bindActionCreators } from "redux";
import { reducer } from "./reducer";
import { increment, decrement, set } from "./actions";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
export const actions = bindActionCreators({ increment, decrement, set}, store.dispatch);