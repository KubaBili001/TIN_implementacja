import React from "react"
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const handleRegister = () => navigate('/register');
    const handleLogin = () => navigate('/app');

    return(
        <div>
            <h1>login</h1>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}