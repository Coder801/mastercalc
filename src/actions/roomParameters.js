import { CHANGE_ROOM_PARAMETRS } from "../constants/actionTypes";

export const changeRoomParameters = dispatch => (value, field) => {
  dispatch({
    type: CHANGE_ROOM_PARAMETRS,
    payload: { value, field }
  });
};
