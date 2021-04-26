const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let menuItemSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  mealPrice: {
    type: Number
  },
  price: {
    type: Number
  },
  pp: {
    type: String
  },
  gf: {
    type: Boolean
  },
  vegetarian: {
    type: Boolean
  },
  chefCrafted: {
    type: Boolean
  },
  categorie: {
    type: String
  },
}, {
  collection: 'the408exchange'
})

module.exports = mongoose.model('MenuItem', menuItemSchema)
