import React from 'react'

function ChiledB({name,clickHandler}) {
    
  return (
    <div>
        {name}

        <button onClick={clickHandler}>send</button>
    </div>


  )
}

export default ChiledB