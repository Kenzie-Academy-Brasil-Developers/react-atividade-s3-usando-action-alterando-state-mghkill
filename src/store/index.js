import { createStore, combineReducers } from "redux";
import studentReducer from "./student/reducer";

const reducres = combineReducers({ student: studentReducer });

const store = createStore(reducres);

export default store;
