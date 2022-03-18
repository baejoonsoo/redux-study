import { combineReducers, createStore } from "redux";
import { toDoReducer } from "./toDo";
import { counter } from "./count";

const reducer = combineReducers({ toDoReducer, counter });

const store = createStore(reducer);
console.log(store.getState());

export default store;
