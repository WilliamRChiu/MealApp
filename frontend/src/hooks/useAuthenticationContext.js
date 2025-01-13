import { AuthenticationContext } from "../context/AuthenticationContext";
import { useContext } from "react";

export const useAuthenticationContext = () =>{
    const context = useContext(AuthenticationContext);//this lets me grab all the values from the authenticationcontext.provider element
    //this function working is dependent on if it is called within a component that is a child of the family AuthenticationContextProvider
    if(!context){
        throw Error("You are calling useAuthenticationContext from a file not inside a AuthenticationContextProvider");
    }
    return context;
}

//run a dispatch command to update the state of the objects in the authenticationcontextprovider file
//ex: dispatch({type:"LOGIN",payload:{jwt: 123455}})