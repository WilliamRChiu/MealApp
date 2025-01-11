import '../LoginForm/LoginForm.css'
import { useState } from 'react'

const LoginForm = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[EmptyField, setEmptyField] = useState('')
    const[error, setError] = useState(null)

    const handleSubmit = async(event)=>{
        event.preventDefault()
        const Data = {email: email, password: password}
        const submission = await fetch('http://localhost:4000/api/user/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Data)
        })
        const Json = await submission.json();
        if(!submission.ok){
            setError(Json.error || "An Unexpected Error Occurred")
            setEmptyField(Json.EmptyField || [])
        }
        else{
            setError(null)
            setEmptyField([])
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
        </form>

    )
    
}
export default LoginForm