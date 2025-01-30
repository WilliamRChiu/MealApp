import '../LoginForm/LoginForm.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

const LoginForm = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[showPassword, setShowPassword] = useState(false)
    const {Login, error, loading, EmptyField} = useLogin();

    const handleSubmit = async(event)=>{
        event.preventDefault()
        try{
            await Login(email, password);
        }
        catch(e){
            console.log("Fetch Error: " + e);
        }
    }



    return(
        <div className='login-container'>
        <form className='Login' onSubmit={handleSubmit}>
            <h3 className='title'>Login</h3>
            <label><b>Email:</b></label>
            <input
            type = "email"
            vaue = {email}
            onChange={(event)=>{setEmail(event.target.value)}}
            className={EmptyField.includes('email')?'error':''}
            />
            <label><b>Password:</b></label>
            <div className='passwordWrapper'>
            <input
            type = {showPassword ? "text":"password"}
            value = {password}
            onChange={(event)=>{setPassword(event.target.value)}}
            className={EmptyField.includes('password')?'error':''}
            />
            <button
                type = "button"
                className='showButton'
                onClick={()=>setShowPassword(!showPassword)}>
                {showPassword ? "🙈 Hide" : "👁 Show"}
            </button>
            </div>
            <button type="submit" disabled={loading} className='button'>Submit</button>
            {error && <div className='error'>{error}</div>}
            <div className="buttonContainer">
                <Link to="/signup" className="signUp">Sign Up</Link>
            </div>
        </form>
        </div>
    )
    
}
export default LoginForm