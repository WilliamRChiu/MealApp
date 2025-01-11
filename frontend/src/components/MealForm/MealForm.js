import React from "react";
import { useState } from "react";
import '../MealForm/MealForm.css'

const MealForm = function(){
    const [Title, setTitle] = useState("");
    const [Calories, setCalories] = useState('');
    const [Protein, setProtein] = useState('');
    const [Fats, setFats] = useState('');
    const [Carbs, setCarbs] = useState('');
    const[MealType, setMealType] = useState('');
    const [error, setError] = useState(null);
    const [EmptyFields, setEmptyFields] = useState([]);


    const postSubmisson = async(event) =>{
        //This stops page from reloading when form submitted
        event.preventDefault();
        const Nutrition = {};
        if(Calories){
            Nutrition.Calories = Number(Calories);
        }
        else{
            Nutrition.Calories = undefined;
        }
        if (Protein) Nutrition.Protein = Number(Protein);
        if (Carbs) Nutrition.Carbs = Number(Carbs);
        if (Fats) Nutrition.Fats = Number(Fats);
        const meal = {Title, Nutrition: Nutrition, MealType};

        //post request
        const response = await fetch('http://localhost:4000/api/Meal/',{
            method: 'POST',
            body: JSON.stringify(meal),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        //await the response
        const json = await response.json();
        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.EmptyField);
        };
        if(response.ok){
            setEmptyFields([]);
            setError(null);
            setTitle('');
            setProtein('');
            setCalories('');
            setFats('');
            setCarbs('');
            setMealType('');
        };
        
    }



    return(
        <form className="addMealForm" onSubmit = {postSubmisson}>
            <h3><b>Add new Meal</b></h3>
            <label>Meal Title:</label>
            <input
            type = "text"
            value = {Title}
            onChange={(event)=>{setTitle(event.target.value)}}
            placeholder="e.g., Eggs"
            className={EmptyFields.includes("Title")?"error":""}
            >
            </input>
            <label>Meal Type:</label>
            <select
            placeholder="e.g., Breakfast"
            value = {MealType}
            onChange={(event)=>{setMealType(event.target.value)}}
            >
                <option value="">Select Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Drink">Drink</option>
                <option value="Other">Other</option>
            </select>
            <fieldset>

            <legend><b>Nutrition Facts</b></legend>
            <label>Calories:</label>
            <input
            type = "number"
            value = {Calories}
            onChange={(event)=>{setCalories(event.target.value)}}
            placeholder="e.g., 1200"
            className={EmptyFields.includes("Calories")?"error":""}
            >
            </input>
            <label>Protein (g):</label>
            <input
            type = "number"
            value = {Protein}
            onChange={(event)=>{setProtein(event.target.value)}}
            placeholder="e.g., 20"
            >
            </input>
            <label>Carbs (g):</label>
            <input
            type = "number"
            value = {Carbs}
            onChange={(event)=>{setCarbs(event.target.value)}}
            placeholder="e.g., 15"
            >
            </input>
            <label>Fats (g):</label>
            <input
            type = "number"
            value = {Fats}
            onChange={(event)=>{setFats(event.target.value)}}
            placeholder="e.g., 15"
            >
            </input>
            </fieldset>
            <button>Add Meal</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MealForm