import React from "react";
import "./Element.css"
import 'tachyons'

export default function Element ({ index, deleteUser, name, lastName, email }) { 
    return (
        <div className="center tc background-color box dib pa3 ma2 bw2 shadow-5">
            <h1>{`${name} ${lastName}`}</h1>
            <p>{email}</p>
            <button onClick={() => deleteUser(index)}>Delete user</button>
        </div>
    )
}

