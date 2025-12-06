import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserProvider'

function Form() {
    const {users, setUsers} = useContext(UserContext)
    const [name, setName] = useState("")

    const clickHandler = () =>{
        setUsers((users)=>[...users, {id:Math.random(100), name}])

    }

    
    const changeHandler = (event) =>{
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