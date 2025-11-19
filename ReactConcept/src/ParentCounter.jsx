import React, { useEffect, useState } from 'react'
import Counter from './Counter'

function ParentCounter() {
    
    const [id, setId] = useState("")

    const ChangeHandler = (event) => {
    setId(event.target.value)
}
  return (
    <>

        {
            id>10 ? <Counter /> : ""
        }
        <input type="text" onChange={ChangeHandler} />

    
    </>
  )
}

export default ParentCounter