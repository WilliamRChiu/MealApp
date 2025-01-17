import { createContext, useReducer, useEffect } from "react";

export const AuthenticationReducer = (state, action) =>{//dispatch sends a action json file when called. that json file can have a bunch of properties like type or payload
    switch(action.type){
        case "LOGOUT":
            return {user:null};
        case "LOGIN":
            return{user: action.payload}
        default:
            return state
    }
}

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthenticationReducer, {
        user: null,
    })

    //need to render the webpage to get the jwt token only ONCE.
    //more effective than hardcoding every function to check for jwt in localstorage
    //can implement Next.js here to serverside render
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            dispatch({type:"LOGIN", payload: user});
        }
    },[]);


    console.log("Current User Login State: ", state);
    return(
        <AuthenticationContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthenticationContext.Provider>
    )
}
//note: any function you want all children to have access to must be in the value part of the AuthenticationContext.Provider element