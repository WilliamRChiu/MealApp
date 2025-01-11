import React from "react";
import '../Home/Home.css';
import MealForm from "../../components/MealForm/MealForm";

const Home = function(){

    return(
        <div className="Home">
            <div className="Meals">
                <header>
                    <h1>Meal Tracker</h1>
                </header>
            
            </div>
            <MealForm/>
        </div>
    )
}

export default Home