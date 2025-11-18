import { useState } from "react"
import styled from "styled-components"


const Div = styled.div`
    border: 1px solid red;
    background-color: aqua;
    color: "${(props)=>(props.name ? 'red' : 'yellow')}";
`

function WelcomeMessage({name}) {
    // const [colorname, setColor] = useState(false)
  return (
    <Div name ={true}>
        welcome {name}
       
    </Div>
  )
}

export default WelcomeMessage