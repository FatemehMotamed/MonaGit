import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelector, decreament, increament } from '../featurs/counter/CounterSlice'

function Counter() {
    // const counter = useSelector((store)=>store.counter.counterValue)
    const counter = useSelector(counterSelector)
    const dispatch = useDispatch()
    console.log(counter)
    const incHandler = ()=>{
        dispatch(increament())
    }
    const decHandler = ()=>{
        dispatch(decreament())
    }
  return (
    <>
        <h3>counter {counter}</h3>
        <button onClick={incHandler}>+</button>
        <button onClick={decHandler}>-</button>
    </>
  )
}

export default Counter