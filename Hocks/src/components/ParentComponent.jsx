import React, { useMemo, useState } from 'react'
import ChiledComponent from './ChiledComponent'

function ParentComponent() {
    console.log("parent rendered");
    
    const [counter, setCounter] = useState(0)
    const [number, setNumber] = useState(0)

    const slow = useMemo(()=>{
        for (let index=0; index<1000; index++){
            console.log("hi");
            
        }
        return counter
    },[counter])

    const numberHandler = ()=>{

        setNumber((number)=> number+1)
    }

    const counterHandler = ()=>{
        setCounter((counter)=> counter+1)
    }
    return (
        <>
        parent counter : {slow}
        <ChiledComponent number= {number} />

        <button onClick={numberHandler}>+number</button>
        <button onClick={counterHandler}>+counter</button>
        </>
    )
}

export default ParentComponent