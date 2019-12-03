var mongoose = require('mongoose')

var foodPostSchema = new mongoose.Schema({
  foodname: {type: String} ,
  location: {type: String},
  postedby: {type: String} ,
  available: {type: String},
  image: {type: String}, 
  description: {type: String},
  
})

module.exports = mongoose.model('FoodPost', foodPostSchema)