import {
    FETCH_CARDS_FAILURE,
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
  } from "./cardTypes";
  
  const initialState = {
    loading: false,
    users: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARDS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CARDS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: "",
        };
      case FETCH_CARDS_FAILURE:
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  