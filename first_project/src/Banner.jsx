import React from 'react'

function Banner({name, age, description}) {
    // const {name, age, description} = props
  return (
  <>
    <h1>{name}</h1>
    <p>{age}</p>
    <p>{description}</p>
  
  </>
  )
}

export default Banner