import { useState } from "react";
import { useAuthenticationContext } from "./useAuthenticationContext";//lets me update global user properties


export const useSignUp = () =>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const {dispatch} = useAuthenticationContext();
    

    const signUp = async(email, password, confirmPassword) =>{
        setLoading(true);
        setError(null);
        if(password!=confirmPassword){
            setError("Passwords Do Not Match.  Please Try Again");
            setLoading(false);
            return
        }
        const Data = {email: email, password: password, confirmPassword: confirmPassword};
        try{
            const signUpResponse = await fetch('http://localhost:4000/api/user/signup',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(Data)
            })
            const fetchResponse = await signUpResponse.json()
            if(!signUpResponse.ok){
                setLoading(false);
                setError(fetchResponse.error || "An unexpected error occured");
                console.log(error);
            }
            else if(signUpResponse.ok){
                setLoading(false);
                localStorage.setItem('user',JSON.stringify(fetchResponse));
                dispatch({type:"LOGIN", payload: fetchResponse});
                
            }
        }
        catch(error){
            console.error('Fetch error:', error);
            setError("Failed to connect to server.  Please try again later")
        }
    }
    return {signUp, loading, error}
}
