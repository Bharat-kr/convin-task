import { CREATE_CARD, DELETE_CARD, UPDATE_CARD } from "./cardTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  loading: false,
  cards: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      title: "IS VLT Profitable?",
      link: "https://www.youtube.com/embed/4_YOtW67lJE",
      bucket: "Entertainment",
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      title: "Make Waves | Episode 5",
      link: "https://www.youtube.com/embed/kwB4ycDxyco",
      bucket: "E-Sports",
    },
  ],
  buckets: ["All", "Entertainment", "E-Sports"],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        loading: false,
        cards: [...state.cards, { id: uuidv4(), ...action.payload.card }],
        buckets: action.payload.buckets,
        error: "",
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case UPDATE_CARD:
      let cards = state.cards;
      cards.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.data.title;
          item.link = action.payload.data.link;
          item.bucket = action.payload.data.bucket;
        }
      });
      return {
        ...state,
        cards: [...cards],
        buckets: state.buckets.includes(action.payload.data.bucket)
          ? [...state.buckets]
          : [...state.buckets, action.payload.data.bucket],
      };
    default:
      return state;
  }
};

export default reducer;
