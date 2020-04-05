import {
  FETCH_CATEGORY_STATE_SUCCESS,
  FETCH_CATEGORY_STATE_FAILURE,
  SET_CATEGORY_STATE_VALUE
} from "../constants/actionTypes";

// TODO: Pass this logic from context START
import MastercalcService from "../services/api-mastercalc";
const mastercalcService = new MastercalcService();
// TODO: Pass this logic from context END

const fetchCategoryStateSuccess = (category, type, options, value = "") => ({
  type: FETCH_CATEGORY_STATE_SUCCESS,
  payload: {
    fetched: true,
    label: category,
    type,
    options,
    value
  }
});

const fetchCategoryStateFailure = error => ({
  type: FETCH_CATEGORY_STATE_FAILURE,
  payload: {
    fetched: false,
    error
  }
});

export const setCategoryStateValue = dispatch => value => {
  dispatch({ type: SET_CATEGORY_STATE_VALUE, payload: value });
};

export const fetchCategoryState = dispatch => (category, type) => {
  mastercalcService
    .getTransitionCategoryState(category, type)
    .then(options => {
      dispatch(fetchCategoryStateSuccess(category, type, options));
    })
    .catch(err => {
      dispatch(fetchCategoryStateFailure(err.message));
    });
};
