const User = require('../models/userModel.js');
const Menu = require('../models/menuModel.js');
const MenuItem = require('../models/menuItemModel.js');

function asyncHandler(cb){
  return async (req, res, next)=>{
    try {
      await cb(req, res, next);
    } catch(err){
      next(err);
    }
  };
}

module.exports = {
  index: asyncHandler( async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  }),

  newUser: asyncHandler( async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save()
    res.status(201).json(user);
  }),

  getUser: asyncHandler( async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  }),

  // should be updated to strict change all fields
  replaceUser: asyncHandler( async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const user = await User.findByIdAndUpdate(userId, newUser);
    res.status(201).json(user);
  }),

  updateUser: asyncHandler( async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const user = await User.findByIdAndUpdate(userId, newUser);
    res.status(201).json(user);
  }),

  deleteUser: asyncHandler( async (req, res, next) => {
    const { userId } = req.params;
    const result = await User.findByIdAndRemove(userId);
    // not sure what end does, cannot seem to have any json returned?
    res.status(201).end();
  }),

  getUsersMenus: asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('menus');
    res.status(200).json(user.menus);
  }),

  newUsersMenu: asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    const newMenu = new Menu(req.body);
    const user = await User.findById(userId);
    newMenu.owner = user;
    await newMenu.save();
    user.menus.push(newMenu);
    await user.save()
    res.status(201).json(newMenu);
  }),

  // below could be reworked to utilize just a menu route

  // getUsersMenu: asyncHandler(async (req, res, next) => {
  //   const { menuId } = req.params;
  //   const menu = await Menu.findById(menuId);
  //   res.status(200).json(menu);
  // }),
  //
  // newMenusMenuItem: asyncHandler(async (req, res, next) => {
  //   const { menuId } = req.params;
  //   const newMenuItem =  new MenuItem(req.body);
  //   const menu = await Menu.findById(menuId);
  //   newMenuItem.owner = menu;
  //   await newMenuItem.save();
  //   menu.menuItems.push(newMenuItem);
  //   await menu.save()
  //   res.status(201).json(newMenuItem);
  // }),

};
