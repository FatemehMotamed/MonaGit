import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreamentByamount, increamentByamunt, numberSelector } from '../featurs/number/NumberSlice'

function Number() {
    // const counter = useSelector((store)=>store.counter.counterValue)
    const number = useSelector(numberSelector)
    const dispatch = useDispatch()
    console.log(number)
    const incHandler = ()=>{
        dispatch(increamentByamunt(2))
    }
    const decHandler = ()=>{
        dispatch(decreamentByamount(2))
    }
  return (
    <>
        <h3>number {number}</h3>
        <button onClick={incHandler}>+</button>
        <button onClick={decHandler}>-</button>
    </>
  )
}

export default Number