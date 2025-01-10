const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const FoodItemSchema = require("./NutritionSchema")

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
        type: FoodItemSchema,
        validate:[
            {
                validator: function(v){
                    return v.length>0;
                },
                message:"At least one food item is required",
            },
        ],

    },
    MealType:{
        type:String,
        require: false,
        enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Drink', 'Other'],
    }
    //Can add a JSON object within the JSON object to list out specific nutrients
}, {timestamps : true});

module.exports = mongoose.model("Calories", foodSchema);