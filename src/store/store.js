import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";
import todoReducer from '../reducers/todoReducer'

const store = createStore(todoReducer, composeWithDevTools());

export default store;
