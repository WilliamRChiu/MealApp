import { useAuthenticationContext } from "./useAuthenticationContext"

export const useLogout = () =>{
    const {dispatch } = useAuthenticationContext();

    const logout = () =>{
        dispatch({type:"LOGOUT"});

        localStorage.removeItem('user');
    }

    return {logout};
    
}