import {dispatchAsync} from "../ReduxDispatcher";
import authConstants from "../constants/authConstants";
import AuthAPI from "../api/AuthAPI";

const fetchGists = (model) => dispatch => {
  dispatchAsync(AuthAPI.fetchGists(model), dispatch, {
    request: authConstants.FETCH_GISTS,
    success: authConstants.FETCH_GISTS_SUCCESS,
    failure: authConstants.FETCH_GISTS_ERROR,
    cancel: authConstants.FETCH_GISTS_CANCEL
  });
}

const createGists = (model) => dispatch => {
  dispatchAsync(AuthAPI.createGists(model), dispatch, {
    request: authConstants.POST_GISTS,
    success: authConstants.POST_GISTS_SUCCESS,
    failure: authConstants.POST_GISTS_ERROR,
    cancel: authConstants.POST_GISTS_CANCEL
  });
}


export { fetchGists, createGists};
