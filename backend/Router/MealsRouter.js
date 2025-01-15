const { Router } = require('express')
const MealRouter = Router();
const{getDayMeal, getMonthMeal, getSpecificMealByTitle, getAllMeals, deleteSpecificMeal, updateSpecificMeal, uploadMeal} = require('../Controllers/MealController')
const AuthenticationChecker = require('../middleware/AuthenticationCheck')

MealRouter.use(AuthenticationChecker);

MealRouter.get('/',getAllMeals);

MealRouter.post('/', uploadMeal);

MealRouter.patch('/Update/:id',updateSpecificMeal);

MealRouter.get('/dayMeals',getDayMeal);

MealRouter.get('/monthMeals', getMonthMeal);

MealRouter.get('/Find', getSpecificMealByTitle);

module.exports = MealRouter