import axios from 'axios';
import {authHeader} from '../sharedServices/auth-header';
import authConstants from '../constants/authConstants';


let AuthAPI = {
  signIn() {
    return axios.get(`https://api.github.com/gists`);
  },
  fetchGists() {
    return axios.get(`https://api.github.com/gists`);
  }
};
export default AuthAPI;
