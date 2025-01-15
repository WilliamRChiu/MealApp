import { useState } from "react";
import { useAuthenticationContext } from "./useAuthenticationContext";//lets me update global user properties


export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [EmptyField, setEmptyField] = useState([]);
    const {dispatch} = useAuthenticationContext();
    

    const Login = async(email, password) =>{
        setLoading(true);
        setError(null);
        setEmptyField([]);
        if(!email){
            setEmptyField([...EmptyField,"email"]);
        }
        if(!password){
            setEmptyField([...EmptyField,"password"]);
        }
        const Data = {email: email, password: password};
        try{
            const LoginResponse = await fetch('http://localhost:4000/api/user/login',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(Data)
            })
            const fetchResponse = await LoginResponse.json()
            if(!LoginResponse.ok){
                setLoading(false);
                setError(fetchResponse.error || "An unexpected error occured");
            }
            else if(LoginResponse.ok){
                setLoading(false);
                setEmptyField([]);
                localStorage.setItem('user',JSON.stringify(fetchResponse));
                //update auth context
                dispatch({type:"LOGIN", payload: fetchResponse});
                
            }
        }
        catch(error){
            console.error('Fetch error:', error);
            setError("Failed to connect to server.  Please try again later")
        }
    }
    return {Login, loading, error, EmptyField}
}
