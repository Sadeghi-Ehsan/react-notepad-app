import authConstant from '../constants/authConstants';

const initialState = {
  loading: false,
  authError: "",
  auth: '',
};
const initialAction = { type: "initial state" };

const authReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case authConstant.SIGN_IN:
    return {
      ...state,
      loading: true
    };
  case authConstant.SIGN_IN_SUCCESS:
    localStorage.setItem('auth', JSON.stringify(action.payload.response.data));
    return {
      ...state,
      loading: false,
      auth: action.payload.response.data
    };
  case authConstant.SIGN_IN_ERROR:
    return {
      ...state,
      loading: false,
      authError: action.payload.error.response.data
    };
  case authConstant.SIGN_IN_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default authReducer;
