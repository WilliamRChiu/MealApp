const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const foodSchema = new Schema({
    Title:{
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    // Calories:{
    //     type: Number,
    //     require: true,
    //     trim: true
    // },
    // Protein:{
    //     type: Number,
    //     minimum: 0,
    // }, Replaced with Nutrition Schema
    Nutrition:{
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
    },
    MealType:{
        type:String,
        require: false,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Drink', 'Other'],
    }
    //Can add a JSON object within the JSON object to list out specific nutrients
}, {timestamps : true});

module.exports = mongoose.model("Calories", foodSchema);