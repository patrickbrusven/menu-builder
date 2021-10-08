import axios from 'axios';

// configured in vue.config.js
const url = 'api/';

class AuthService {
  static register(credentials) {
    return axios.post(`${url}register`, credentials);
  }

  static login(credentials) {
    return axios.post(`${url}login`, credentials);
  }

}

export default AuthService;
