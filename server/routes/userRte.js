const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userCtrl.js');


// /users routes
// GET all users
// POST add new user
router.route('/')
  .get(UserController.index)
  .post(UserController.newUser);

// /users/:userId
// GET gets specific user
// PUT replace specific user
// PATCH update specific user
// DELETE remove specific user
router.route('/:userId')
  .get(UserController.getUser)
  .put(UserController.replaceUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

// /users/:userId/menus
// GET gets specific users array of menus
// POST adds a menu to a specific users array of menus
router.route('/:userId/menus')
  .get(UserController.getUsersMenus)
  .post(UserController.newUsersMenu);

// /users/:userId/:menuId
// GET gets specific users specif menu
// POST adds a menuItem to a specific users specific menu
// router.route('/:userId/:menuId')
//   .get(UserController.getUsersMenu)
//   .post(UserController.newMenusMenuItem);

// /users/:userId/:menuId/:menuItemId
// GET gets speicifi item of a specific menu of specific user
// POST adds a menuItem to a specific users specific menu
// router.route('/:userId/:menuId/:menuItemId')
//   .get()
//   .put()
//   .patch()
//   .delete()

module.exports = router;
