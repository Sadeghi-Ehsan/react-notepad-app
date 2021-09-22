import axios from 'axios';
import {authHeader} from '../sharedServices/auth-header';
import authConstants from '../constants/authConstants';


let AuthAPI = {
  signIn(model) {
    return axios.get(`https://api.github.com/gists?${model}`);
  },
  fetchGists(model) {
    return axios.get(`https://api.github.com/gists?${model}`);
  }
};
export default AuthAPI;
