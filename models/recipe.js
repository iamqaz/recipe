const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: String,
  prep: Number,
  cook: Number,
  imgUrl: String,
  ingredients: Array,
  instructions: Array
});

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe;
