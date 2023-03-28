import axios from "axios";
import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
} from "./cardTypes";

export const fetchCardsRequest = () => {
  return {
    type: FETCH_CARDS_REQUEST,
  };
};
export const fetchCardsSuccess = (users) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: users,
  };
};
export const fetchCardsFailure = (error) => {
  return {
    type: FETCH_CARDS_FAILURE,
    payload: error,
  };
};

export const fetchCards = () => {
  return (dispatch) => {
    dispatch(fetchCardsRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchCardsSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCardsFailure(errorMsg));
      });
  }; //what is important here is this has not to be pure it can have side effects such as async api calls
};
