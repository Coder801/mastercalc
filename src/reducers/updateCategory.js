import { FETCH_CATEGORY_SUCCESS, SET_CATEGORY_VALUE } from "../constants/actionTypes";

const initialState = { label: "walls", options: [], value: "" };

const updateCategory = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return action.payload;

    case SET_CATEGORY_VALUE:
      return {
        ...state.category,
        value: action.payload
      };

    default:
      return state.category;
  }
};

export default updateCategory;
