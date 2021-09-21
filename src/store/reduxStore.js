import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "../reducers";

const middleware = [thunk];
const reduxStore = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware))
);

export default reduxStore;
