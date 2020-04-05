import { FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE, SET_CATEGORY_VALUE } from "../constants/actionTypes";

// TODO: Pass this logic from context START
import MastercalcService from "../services/api-mastercalc";
const mastercalcService = new MastercalcService();
// TODO: Pass this logic from context END

const fetchCategorySuccess = (label, options, value = "") => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: {
    fetched: true,
    label,
    options,
    value
  }
});

const fetchCategoryFailure = error => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: {
    fetched: false,
    error
  }
});

export const setCategoryValue = dispatch => value => {
  dispatch({ type: SET_CATEGORY_VALUE, payload: value });
};

export const fetchCategory = dispatch => (category = "walls") => {
  mastercalcService
    .getTransitionCategory(category)
    .then(options => {
      dispatch(fetchCategorySuccess(category, options));
    })
    .catch(err => {
      dispatch(fetchCategoryFailure(err.message));
    });
};
