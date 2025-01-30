import React, { useEffect } from "react";
import '../Home/Home.css';
import MealForm from "../../components/MealForm/MealForm";
import { useAuthenticationContext } from "../../hooks/useAuthenticationContext";

const Home = function(){

    const { user } = useAuthenticationContext();
    useEffect(()=>{
        const fetchMeal = async() =>{
            const response = await fetch('http://localhost:4000/api/Meal/', {
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json();
            if(response.ok){
                
            }
        }
    })
    return(
        <div className="Home">
            <div className="Meals">
            </div>
            <MealForm/>
        </div>
    )
}

export default Home