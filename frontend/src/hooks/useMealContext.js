import { MealContextProvider } from "../context/MealContext";
import { useContext } from "react";

export const useMealContext = () =>{
    const content = useContext(MealContextProvider);
    if(!content){
        throw Error("You do not have access to the MealContextProvider");
    }
    return content;
}