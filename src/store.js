import { createStore } from "redux";
import {combineReduce} from './CombineReducers/combine';
const store = createStore(combineReduce,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;


