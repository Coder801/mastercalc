import { CHANGE_SELECTED_SURFACE } from "../constants/actionTypes";

const initialState = "walls";

const updateCalculator = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case CHANGE_SELECTED_SURFACE:
      return action.payload;

    default:
      return state.surface;
  }
};

export default updateCalculator;
