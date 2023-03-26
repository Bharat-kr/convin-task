import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
//it allows us to define async action creaters in our application
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"; // just an extension to make our work easy and handle debugging

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

//create store needs the reducer to make it will available for use on action calls

export default store;
