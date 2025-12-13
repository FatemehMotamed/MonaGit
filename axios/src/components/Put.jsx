import axios from 'axios'
import React, { useState } from 'react'
import api from '../servises/config'

function Put() {
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const changeHandler = (event) => {
        setId(event.target.value)

    }

    const titleHandler = (event)=>{
        setTitle(event.target.value)
    }

    const deleteData = async () => {
        try {
            const req = await api.patch(`/posts/${id}`, {title})
            console.log(req);

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            id<input type="text" onChange={changeHandler} />
            title<input type="text" onChange={titleHandler} />
            <button onClick={deleteData}>Change</button>

        </>
    )
}

export default Put