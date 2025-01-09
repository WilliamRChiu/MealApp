const { Router } = require('express')
const MealRouter = Router();
const{getDayMeal, getMonthMeal, getSpecificMealByTitle, getAllMeals, deleteSpecificMeal, updateSpecificMeal, uploadMeal} = require('../Controllers/MealController')



MealRouter.get('/',getAllMeals);

MealRouter.post('/Upload', uploadMeal);

MealRouter.patch('/Update/:id',updateSpecificMeal);

MealRouter.get('/dayMeals',getDayMeal);

MealRouter.get('/monthMeals', getMonthMeal);

MealRouter.get('/Find', getSpecificMealByTitle);

module.exports = MealRouter