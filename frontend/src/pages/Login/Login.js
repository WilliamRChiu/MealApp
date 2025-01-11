import { useState } from 'react'
import '../../components/LoginForm/LoginForm'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () =>{
    return(
        <div className='Login'>
            <div className = 'Form'>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login