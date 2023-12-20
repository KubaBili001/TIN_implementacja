import React, {useEffect, useState} from "react";
import Validator from "../Validator/Validator";
import "./Form.css"

export default function Form({ onSubmit }) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [validator, setValidator] = useState(false)

    useEffect(() => {
        (name.length < 3 || lastName.length < 3 || email.length) < 3 ? setValidator(false) : setValidator(true)
    }, [name, lastName, email])

    const updateList = () => {
        if(validator){
            onSubmit({
                name: name,
                lastName: lastName,
                email: email    
            })
            
            setName('')
            setLastName('')
            setEmail('')
        }
    }

    return(
        <div className="form">
            <div className="validator">
                <Validator validator={validator}/>
            </div>
            <div className="inputs">
                <input type='text'  name='name' value={name} onChange={e => setName(e.target.value)}></input>
                <input type='text'  name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}></input>
                <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                <button onClick={updateList}>Add user</button>
            </div>
        </div>
    )
}