const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menuCtrl.js');


// /menus routes
// GET all menus
router.route('/')
  .get(MenuController.index);

// /menus/:menuId
// GET gets specific users specif menu
// PATCH updates a specific menu
// DELETE removes a specific menu
router.route('/:menuId')
  .get(MenuController.getMenu)
  .patch(MenuController.updateMenu)
  .delete(MenuController.removeMenu);

// /menus/:menuId/menuitems
// GET gets menu items from a specific menu
// POST adds a menuItem to a specific menu
router.route('/:menuId/menuitems')
  .get(MenuController.getMenuItems)
  .post(MenuController.newMenuItem);

// /menus/:menuId/menuitemId
// GET gets menu item
// PATCH updates a menu item
// DELETE removes a menu item
router.route('/:menuId/:menuItemId')
  .get(MenuController.getMenuItem)
  .patch(MenuController.updateMenuItem)
  .delete(MenuController.removeMenuItem);

module.exports = router;
