import authConstant from '../constants/authConstants';

const initialState = {
  loading: false,
  auth: '',
  gists: [],
  newCreatedGist:[]
};
const initialAction = {type: "initial state"};

const authReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
    case authConstant.FETCH_GISTS:
      return {
        ...state,
        gistLoading: true
      };
    case authConstant.FETCH_GISTS_SUCCESS:
      return {
        ...state,
        gistLoading: false,
        gists: action.payload.response.data
      };
    case authConstant.FETCH_GISTS_ERROR:
      return {
        ...state,
        gistLoading: false,
        gistsError: action.payload.error
      };
    case authConstant.FETCH_GISTS_CANCEL:
      return {
        ...state,
        gistLoading: false
      };


    case authConstant.POST_GISTS:
      return {
        ...state,
        gistCreate: true
      };
    case authConstant.POST_GISTS_SUCCESS:
      return {
        ...state,
        gistCreate: false,
        newCreatedGist: action.payload.response.data
      };
    case authConstant.POST_GISTS_ERROR:
      return {
        ...state,
        gistCreate: false,
        gistsError: action.payload.error
      };
    case authConstant.POST_GISTS_CANCEL:
      return {
        ...state,
        gistCreate: false
      };

    default:
      return state;
  }
};

export default authReducer;
