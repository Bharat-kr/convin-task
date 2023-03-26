//so as we can pass only one reducer to createstore function se we need to combine reducers that we will do here
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer";

//so combine takes the object file as input
const rootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer,
});

export default rootReducer;
