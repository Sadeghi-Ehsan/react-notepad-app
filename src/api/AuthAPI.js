import axios from 'axios';
import {authHeader} from '../sharedServices/auth-header';
import authConstants from '../constants/authConstants';


let AuthAPI = {
  signIn () {
    return axios.get(`developer.github.com/v3/gists/`, { headers: authHeader() });
  }
};
export default AuthAPI;
