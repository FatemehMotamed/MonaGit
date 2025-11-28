//=====================روش اول گرفتن props (بهترین حالت)
import React from 'react'

function Banner({ name, age, description }) {

  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{description}</p>

    </>
  )
}

export default Banner

// =======================روش دوم گرفتن props
// function Banner({ props }) {
//   const { name, age, description } = props
//   return (
//     <>
//       <h1>{name}</h1>
//       <p>{age}</p>
//       <p>{description}</p>

//     </>
//   )
// }

// export default Banner

// =======================روش سوم گرفتن props
// function Banner({ props }) {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//       <p>{props.description}</p>

//     </>
//   )
// }

// export default Banner
