import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import frame from "./../assets/icons/Frame.svg";
import vector1 from "./../assets/icons/Vector_1.svg";
import vector3 from "./../assets/icons/Vector_3.svg";
import { book } from "./../redux/booking/actions";

const InputForm = () => {
  const state = useSelector((state) => state.booking); 
  const dispatch = useDispatch();
  const handleFromSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingInfo = {
      from: formData.get("from"),
      to: formData.get("to"),
      date: formData.get("date"),
      guests: formData.get("guests"),
      ticketClass: formData.get("ticketClass"),
    };
    if (bookingInfo.from === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a destination from",
      });
      return;
    } else if (bookingInfo.to === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a destination to",
      });
      return;
    } else if (bookingInfo.date === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a date",
      });
      return;
    } else if (bookingInfo.guests === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select number of guests",
      });
      return;
    } else if (bookingInfo.ticketClass === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a class",
      });
      return;
    }
    dispatch(book(bookingInfo));
    e.target.reset();
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleFromSubmit}>
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            className="addCity"
            disabled={state.booking.length >= 3}
            style={state.booking.length >= 3 ? { opacity: ".5" } : { opacity: "1" }}
            type="submit"
            id="lws-addCity"
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
