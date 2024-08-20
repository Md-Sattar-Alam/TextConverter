import { createStore } from "redux";
import CakeReducer from "./Reducer";
const store = createStore(CakeReducer);
export default store;
