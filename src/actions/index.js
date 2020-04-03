import { CHANGE_ROOM_PARAMETRS, CHANGE_SELECTED_SURFACE } from "../constants/actionTypes";
import MastercalcService from "../../services/api-mastercalc";

const mastercalcService = new MastercalcService();

const changeRoomParameters = newParameter => ({
  type: CHANGE_ROOM_PARAMETRS,
  payload: newParameter
});

// const fetchBooks = (bookstoreService, dispatch) => () => {
//   dispatch(fetchBooksRequest());
//   bookstoreService
//     .getBooks()
//     .then(data => dispatch(fetchBooksSuccess(data)))
//     .catch(err => dispatch(fetchBooksFailure(err)));
// };

// const addBookToCart = dispatch => bookId => {
//   dispatch({
//     type: ADD_BOOK_ITEM,
//     payload: bookId
//   });
// };

export { changeRoomParameters };
