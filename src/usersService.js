import axios from 'axios';

// configured in vue.config.js
const url = 'api/users/';

class UsersService {
  static getUsers() {
    return axios.get(`${url}`);
  }

  static newUser(newUser) {
    return axios.post(`${url}`, {
      newUser
    });
  }

  static getUser(userId) {
    return axios.get(`${url}${userId}`);
  }

  static updateUser(userId, updates) {
    return axios.patch(`${url}${userId}`, {
      updates
    });
  }

  static getUsersMenus(userId) {
    return axios.get(`${url}${userId}/menus`);
  }

  static newUsersMenu(userId, newMenu) {
    return axios.post(`${url}${userId}/menus`, newMenu);
  }
}

export default UsersService;
