import React, { useEffect } from "react";
import '../Home/Home.css';
import MealForm from "../../components/MealForm/MealForm";
import { useAuthenticationContext } from "../../hooks/useAuthenticationContext";

const Home = function(){

    // const { user } = useAuthenticationContext();
    // useEffect();
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