import { CREATE_CARD, DELETE_CARD, UPDATE_CARD } from "./cardTypes";

export const createCard = (card, buckets) => {
  return {
    type: CREATE_CARD,
    payload: { card, buckets },
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  };
};

export const updateCard = (id, data) => {
  return {
    type: UPDATE_CARD,
    payload: { id, data },
  };
};
