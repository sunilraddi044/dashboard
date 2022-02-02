import { createStore, combineReducers } from "redux";
import displayChatReducer from "../reducer/Reducer";

const reducer = combineReducers({ displayChat: displayChatReducer });

const store = createStore(reducer);

export default store;
