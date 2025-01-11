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
        const meal = {Title, Calories, Protein, Fats, Carbs, MealType};

        //post request
        const response = await fetch('http://localhost:6000/api/Meal',{
            method: 'POST',
            body: JSON.stringify(meal),
            headers:{
                'Content-Type' : 'application/json'
            }
        });
        //await the response
        const json = await response.json();
        if(!response){
            setError(json.error);
            setEmptyFields(json.EmptyFields);
        }
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
            >
            </input>
            <label>Meal Type:</label>
            <input
            type = "text"
            value = {MealType}
            onChange={(event)=>{setMealType(event.target.value)}}
            placeholder="e.g., Breakfast"
            >
            </input>
            <fieldset>

            <legend><b>Nutrition Facts</b></legend>
            <label>Calories:</label>
            <input
            type = "number"
            value = {Calories}
            onChange={(event)=>{setCalories(event.target.value)}}
            placeholder="e.g., Breakfast"
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
            placeholder="15"
            >
            </input>
            <label>Fats (g):</label>
            <input
            type = "text"
            value = {Fats}
            onChange={(event)=>{setFats(event.target.value)}}
            placeholder="e.g., 15"
            >
            </input>
            </fieldset>
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}