import React, {useState, useEffect} from "react";
import Element from "../Element/Element";
import Form from "../Form/Form"
import "./List.css" 

export default function List(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("I have been mounted")
      }, [])

    const onSubmit = (user) => {
        setUsers([...users, user])
    }

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
                    lastName={element.lastName}
                    email={element.email}
                    />   
                    )
                }) 
            }
            </div>
        </div>
    )
}
