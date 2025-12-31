import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function CustomCumponent() {
    const [name, setName] = useLocalStorage("first name", "")

    const changeHandler = (event)=>{
            setName(event.target.value)
    }
  return (
    <>

    <p>Name: {name}</p>

    <input type="text" onChange={changeHandler} />
    
    
    </>
  )
}

export default CustomCumponent