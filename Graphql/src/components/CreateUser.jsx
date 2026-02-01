import React, { useState } from 'react'
import { CREATE_USER } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'



function CreateUser() {

    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")

    const [CreateUser, {data, loading, error, called}] = useMutation(CREATE_USER, {
        variables:{
            username,
            name, 
            email

        }
    })

    console.log(data)
    
  return (

    <>

    <input type="text" name="" id="" placeholder='username' value={username}   onChange={(e)=> setUserName(e.target.value)} />
    <input type="text" name="" id="" placeholder='name' value={name}  onChange={(e)=> setName(e.target.value)} />
    <input type="text" name="" id="" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />

    <button onClick={()=> CreateUser()}>send</button>
    
    
    </>
  )
}

export default CreateUser