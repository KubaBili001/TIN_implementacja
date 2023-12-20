import React from "react"
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const handleBack = () => navigate('/');

    return(
        <div>
            <h1>404</h1>
            <button onClick={handleBack}>Go to login page</button>
        </div>
    )

}