import { FETCH_CATEGORY_STATE_SUCCESS, SET_CATEGORY_STATE_VALUE } from "../constants/actionTypes";

const initialState = {
  label: "initial",
  options: [],
  value: ""
};

const updateCategoryState = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_CATEGORY_STATE_SUCCESS:
      return action.payload;

    case SET_CATEGORY_STATE_VALUE:
      return {
        ...state.categoryState,
        value: action.payload
      };

    default:
      return state.categoryState;
  }
};

export default updateCategoryState;
