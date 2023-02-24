import Swal from "sweetalert2";
import { BOOK, REMOVE } from "./actionTypes";

const initialState = {
  booking: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      if (state.booking.length === 3) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You can't book more than 3 tickets",
        })
        return state;
      }
      return {
        ...state,
        booking: [...state.booking, { id: Date.now(), ...action.payload }],
      };
    case REMOVE:
      return {
        ...state,
        booking: state.booking.filter((b) => b.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookingReducer;
