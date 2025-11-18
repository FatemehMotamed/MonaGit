import  { useState } from 'react'
import ChildA from './ChildA'
import ChiledB from './ChiledB'

function Parent() {
const [name, setName] = useState("Mona")


const clickHandler = () =>{
    setName("fatemeh")
}
  return (
    <>


        <ChildA  name={name} />
        <ChiledB  name = {name} clickHandler = {clickHandler}/>


    </>
  )
}

export default Parent