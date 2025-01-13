import '../LoginForm/LoginForm.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

const LoginForm = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {Login, error, loading, EmptyField} = useLogin();

    const handleSubmit = async(event)=>{
        event.preventDefault()
        try{
            const LoginSubmission = await Login(email, password);
        }
        catch(e){
            console.log("Fetch Error: " + e);
        }
    }



    return(
        <form className='Login' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label><b>Email:</b></label>
            <input
            type = "email"
            onChange={(event)=>{setEmail(event.target.value)}}
            className={EmptyField.includes('email')?'error':''}
            />
            <label><b>Password:</b></label>
            <input
            type = "password"
            onChange={(event)=>{setPassword(event.target.value)}}
            className={EmptyField.includes('password')?'error':''}
            />
            <button>Submit</button>
            {error && <div className='error'>{error}</div>}
            {/* Sign Up Button */}
            <div className="buttonContainer">
                <Link to="/signup" className="signUp">Sign Up</Link>
            </div>
        </form>

    )
    
}
export default LoginForm