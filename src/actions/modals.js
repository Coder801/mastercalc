import { TOGGLE_MODAL } from "../constants/actionTypes";

export const toggleModal = dispatch => payload => {
  dispatch({
    type: TOGGLE_MODAL,
    payload
  });
};
