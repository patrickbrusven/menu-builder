import axios from 'axios';

// configured in vue.config.js
const url = 'api/menus/';

class MenuService {
  static getMenu(menuId) {
    return axios.get(`${url}${menuId}`);
  }

  static updateMenu(menuId, updatedMenu) {
    return axios.patch(`${url}${menuId}`, updatedMenu)
  }

  static removeMenu(menuId) {
    return axios.delete(`${url}${menuId}`);
  }

  static getMenuItems(menuId) {
    return axios.get(`${url}${menuId}/menuitems`);
  }

  static newMenuItem(menuId, newItem) {
    return axios.post(`${url}${menuId}/menuitems`, newItem);
  }

  static getMenuItem(menuId, menuItemId) {
    return axios.get(`${url}${menuId}/${menuItemId}`);
  }

  static updateMenuItem(menuId, menuItemId, updatedItem) {
    return axios.patch(`${url}${menuId}/${menuItemId}`, updatedItem);
  }

  static removeMenuItem(menuId, menuItemId) {
    return axios.delete(`${url}${menuId}/${menuItemId}`);
  }
}

export default MenuService;
