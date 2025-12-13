import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Delete() {
    const [id, setId] = useState("")
    const changeHandler = (event)=>{
        setId(event.target.value)

    }

    const deleteData = async () => {
            try {
                const req = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                console.log(req);

            } catch (error) {
                console.log(error.message)
            }
        }

    return (
        <>
        <input type="text" onChange={changeHandler} />
        <button onClick={deleteData}>Delete</button>
        
        </>
    )
}

export default Delete