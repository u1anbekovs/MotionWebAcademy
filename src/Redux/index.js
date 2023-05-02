import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Redux/Reducer/index";


export const store = createStore(rootReducer, composeWithDevTools());
