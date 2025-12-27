import React, { use, useEffect, useState, useTransition } from 'react'
import { useTitle } from '../hooks/useTitle'

function TransitionComponent() {
    // useEffect(()=>{
    //     document.title = "Transition"
    // }, [])
    useTitle("Transition")
    console.log("component rendered")
    const arrayCreator = (number = 10) =>{
        const temp = []
        for (let index = number; index >=0; index--) {
            temp.push(index)
            
        }
        return temp

    }
    const [numbers, setNumbers] = useState(arrayCreator())
    const [value, setValue] = useState(0)
    const [isPending, startTransition] = useTransition()

    const changeHandler = (event)=>{
        setValue(event.target.value)
        startTransition(()=>setNumbers(arrayCreator(event.target.value)))
    }
  return (

    

   <>
   Value: {value}
   <input type="text" onChange={changeHandler} />
   
   { isPending ? <h4>Loading ...</h4> :
   numbers.map((number, index)=>(<p key = {index}>{number}</p>))}

   </>
    
  )
}

export default TransitionComponent