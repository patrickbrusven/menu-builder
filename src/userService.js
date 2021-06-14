import axios from 'axios';

const url = 'http://localhost:5000/api/user/';

class UserService {
  static getUser(token) {
    return axios.get(`${url}${token}`);
  }
}

export default UserService;
