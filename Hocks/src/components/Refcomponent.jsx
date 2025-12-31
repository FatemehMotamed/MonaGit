import React, { useRef, useState } from 'react'

function Refcomponent() { 

  console.log("component rerendered")

  const counter = useRef(0)
  const [number, setNumber] = useState(0)
  const myinput = useRef("hi")

  const counterHandler = () => {
    counter.current++
    console.log(counter);
  }

  const numberHandler = () => {
    setNumber((number) => number + 1)
  }

  const inputHandler = () => {
    // console.log(myinput.current.value)
    console.log(myinput)
    myinput.current.focus()

  }
  return (
    <>

      {number}
      <button onClick={numberHandler}>+state</button>
      <button onClick={counterHandler}>+ref</button>

      <input type="text" ref={myinput} />
      <input type="button" onClick={inputHandler} value="send" />

    </>
  )
}

export default Refcomponent