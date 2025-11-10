import { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)
    const counterHandler = () =>{
        setCounter((counter)=> counter+1)
        setCounter((counter)=> counter+1)
        setCounter((counter)=> counter+1)
    }
  return (

    <>
        <p>{counter}</p>
        <button onClick={counterHandler}>+</button>
    </>
    
  )
}

export default Counter