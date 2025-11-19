import { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
    border: 1px solid red;
    background-color: aqua;
    color: ${(props) => (props.name ? 'red' : 'yellow')};
`

// const Div = styled.div`
//   color: blue;
//   background-color: ${(props) => props.colorname ? "red" : 'yellow'};
//   &:hover{
//     background-color: green;
//   }
// `

function WelcomeMessage({ name }) {
  const [colorname, setColor] = useState(false)
  return (
    <Div name={colorname}>

      welcome {name}
      <button onClick={() => setColor(!colorname)}>change</button>

    </Div>
  )
}

export default WelcomeMessage