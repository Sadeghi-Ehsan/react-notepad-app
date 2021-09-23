import axios from 'axios';
import {authHeader} from '../sharedServices/auth-header';


let AuthAPI = {
  fetchGists(model) {
    return axios.get(`https://api.github.com/gists?${model}`);
  },
  createGists(model) {
    return axios.post(`https://api.github.com/gists`,model, {headers: authHeader()});
  }
};
export default AuthAPI;
