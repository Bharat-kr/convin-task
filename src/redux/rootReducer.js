import { combineReducers } from "redux";
import cardReducer from "./cards/cardReducer";

const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;
