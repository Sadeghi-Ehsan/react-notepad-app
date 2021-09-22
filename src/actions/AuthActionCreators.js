import {dispatchAsync} from "../ReduxDispatcher";
import authConstants from "../constants/authConstants";
import AuthAPI from "../api/AuthAPI";

const signIn = () => dispatch => {
  dispatchAsync(AuthAPI.signIn(), dispatch, {
    request: authConstants.SIGN_IN,
    success: authConstants.SIGN_IN_SUCCESS,
    failure: authConstants.SIGN_IN_ERROR,
    cancel: authConstants.SIGN_IN_CANCEL
  });
};
const fetchGists = (model) => dispatch => {
  dispatchAsync(AuthAPI.fetchGists(model), dispatch, {
    request: authConstants.FETCH_GISTS,
    success: authConstants.FETCH_GISTS_SUCCESS,
    failure: authConstants.FETCH_GISTS_ERROR,
    cancel: authConstants.FETCH_GISTS_CANCEL
  });
}


export {signIn, fetchGists};
