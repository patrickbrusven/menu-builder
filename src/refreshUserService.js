import axios from 'axios';

const url = 'http://localhost:5000/api/';

class RefreshUserService {
  static getUserByToken(token) {
    return axios.get(`${url}${token}`);
  }
}

export default RefreshUserService;
