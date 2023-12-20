import React from "react";
import './Validator.css'

export default function Validator({validator}) {
    return(!validator && <h1 className="error">All fields must be at least 3 characters long.</h1>)
}