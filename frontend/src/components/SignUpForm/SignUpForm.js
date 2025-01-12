import { Link } from "react-router-dom";
import { use, useState } from "react";
import '../SignUpForm/SignUpForm.css'

const SignUpForm = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const[EmptyField, setEmptyField] = useState([])
    const[error, setError] = useState(null)

    const handleSubmit = async(event) =>{
        event.preventDefault()
        setError(null)
        setEmptyField([])
        if(password!=confirmPassword){
            setError("Passwords Do Not Match.  Please Try Again");
            return
        }
        const Data = {email: email, password: password, confirmPassword: confirmPassword};
        try{
            const submission = await fetch('http://localhost:4000/api/user/signup',{
                type: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(Data)
            });
            const response = await submission.json();
            if (!submission.ok){
                setError(response.error);
                setEmptyField(response.EmptyField);
            }
            else{
                setEmail('')
                setPassword('')
                setError('')
                setEmptyField([])
                //should now redirect to home page for user based on jwt
            }
        }
        catch(error){
            console.error('Fetch error:', error);
            setError("Failed to connect to server.  Please try again later")
        }
    }
    return (
        <div className="SignUpContainer">
            <form className='SignUp' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label><b>Email:</b></label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={EmptyField.includes('email') ? 'error' : ''}
                    placeholder="Enter your email"
                    required
                />

                <label><b>Password:</b></label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={EmptyField.includes('password') ? 'error' : ''}
                    placeholder="Enter your password"
                    required
                />

                <label><b>Confirm Password:</b></label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={EmptyField.includes('confirmPassword') ? 'error' : ''}
                    placeholder="Confirm your password"
                    required
                />

                <button type="submit">Sign Up</button>

                {error && <div className='error'>{error}</div>}

                <Link to={"/login"} className="loginButton">Already Have An Account? Login</Link>
            </form>
        </div>
    );
}

export default SignUpForm;