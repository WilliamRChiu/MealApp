const { Schema} = require('mongoose')
const mongoose = require('mongoose');


const FoodItemSchema = new Schema({
    CountQueuingStrategyuantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Amount must be positive'],
    },
    Calories: {
      type: Number,
      required: [true, 'Calories are required'],
      min: [0, 'Calories cannot be negative'],
    },
    Protein: {
      type: Number,
      default: 0,
      min: [0, 'Protein cannot be negative'],
    },
    Carbs: {
      type: Number,
      default: 0,
      min: [0, 'Carbohydrates cannot be negative'],
    },
    Fats: {
      type: Number,
      default: 0,
      min: [0, 'Fats cannot be negative'],
    },
  }, { _id: false }); 
  
  module.exports = mongoose.model("FoodItemSchema", FoodItemSchema);