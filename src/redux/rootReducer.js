//so as we can pass only one reducer to createstore function se we need to combine reducers that we will do here
import { combineReducers } from "redux";
import cardReducer from "./cards/cardReducer";

//so combine takes the object file as input
const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;
