import { Link } from "react-router-dom";
import { use, useState } from "react";
import '../SignUpForm/SignUpForm.css';
import { useSignUp } from "../../hooks/useSignUp";

const SignUpForm = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const {signUp, error, loading} = useSignUp();

    const handleSubmit = async(event) =>{
        event.preventDefault()
        try{
            await signUp(email,password,confirmPassword);
        }
        catch(error){
            console.error('Fetch error:', error);
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
                    placeholder="Enter your email"
                    required
                />

                <label><b>Password:</b></label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />

                <label><b>Confirm Password:</b></label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    required
                />

                <button type="submit" disabled={loading}>Sign Up</button>

                {error && <div className='error'>{error}</div>}

                <Link to={"/login"} className="loginButton">Already Have An Account? Login</Link>
            </form>
        </div>
    );
}

export default SignUpForm;