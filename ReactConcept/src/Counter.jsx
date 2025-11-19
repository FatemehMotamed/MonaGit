import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
        useEffect (()=>{
    
            const timer = setInterval(() => {
                setCount(count+1)
            }, 1000);
    
            return () =>{
                clearInterval(timer)
                console.log("Clean");
                
            }
        }, [count])
  return (
    <div>{count}</div>
  )
}

export default Counter