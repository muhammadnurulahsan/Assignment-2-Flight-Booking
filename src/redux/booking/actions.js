import { BOOK, REMOVE } from "./actionTypes";

export const book = (bookingInfo) => {
  return {
    type: BOOK,
    payload: bookingInfo,
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
