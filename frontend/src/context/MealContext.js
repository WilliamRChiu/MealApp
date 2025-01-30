import { createContext, useReducer} from "react";

export const MealContextReducer = (state, action) =>{
    switch (action.type){
        case "CREATE_MEAL":
            return{
                meal: [action.payload, ...state.meal]
            }
        case "DELETE_MEAL":
            return{
                meal: action.payload
            }

        case "UPDATE_MEAL":
            return{
                meal: action.payload
            }
        default:
            return state;
    }
}

export const MealContext = createContext();

export const MealContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(MealContextReducer,{
        meal: null,
    });


    return(
        <MealContext.Provider value = {{...state,dispatch}}>
            {children}
        </MealContext.Provider>
    )

    
}