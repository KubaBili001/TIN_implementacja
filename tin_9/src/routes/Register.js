import React from "react"
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const handleRegister = () => navigate('/');

    return(
        <div>
            <h1>register</h1>
            <button onClick={handleRegister}>Register</button>
        </div>
    )

}