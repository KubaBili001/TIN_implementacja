import React, {useEffect, useState} from "react";
import Element from "../Element/Element";
import Form from "../Form/Form"
import "./List.css" 

export default function List(){
    const [users, setUsers] = useState([])

    const onSubmit = (user) => {
        setUsers([...users, user])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
      }, [])


    const deleteUser = (index) => {
        let clone = [...users]
        clone.splice(index, 1)
        setUsers(clone)
    }

return(
        <div className="container">
            <Form onSubmit={onSubmit} />
            <div className="element-container">
            {
               users.map((element, index) => {
                return (
                    <Element
                    key={index} 
                    index={index}
                    deleteUser={deleteUser}
                    name={element.name}
                    email={element.email}
                    />   
                    )
                }) 
            }
            </div>
        </div>
    )
}
