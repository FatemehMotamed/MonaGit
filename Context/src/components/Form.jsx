import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserProvider'

function Form() {
    const { users, setUsers } = useContext(UserContext)
    const [name, setName] = useState("")

    // const clickHandler = () => {
    //     setUsers((users) => [...users, { id: Math.random(100), name }])
    //     console.log(users);
    // }

    const clickHandler = () => {
        // const newId = users[users.length - 1].id + 1
        const newId = users.length + 1
        setUsers((users) => [...users, { id: newId, name }])
        console.log(users);
    }

    const changeHandler = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <input type="text" onChange={changeHandler} />
            <button onClick={clickHandler}>add</button>
        </>
    )
}

export default Form