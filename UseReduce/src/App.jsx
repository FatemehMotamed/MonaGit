import { useReducer } from "react"
import Request from "./Request"
// const reducer = (state,action) =>{
//   switch(action.type){
//     case "add":
//       return {...state, counter: state.counter+1}
//     case "increase":
//       return  {...state, counter: state.counter+action.payload} 
//     case "mines":
//       return {...state, counter: state.counter-1}
//     case "reset":
//       return {...state, counter:0}
//     case "incNumber": 
//     return {...state, number: state.number+1}

//     default:
//       throw new Error("action not defined")
//   }

// }
// const initialState = {
//   counter:0,
//   number:1

// }

function App() {
  // const [state, dispatch] = useReducer(reducer,initialState)

  // const increaseHandler = ()=>{
  //   dispatch({type: "add"})

  // }

  // const increaseByAmountHandler = () =>{
  //   dispatch({type:"increase", payload: 5})
  // }

  // const decreaseHandler = ()=>{
  //   dispatch({type: "mines"})
    
  // }
  // const resetHandler = ()=>{
  //   dispatch({type: "reset"})
  // }

  // const increaseNumber = ()=>{
  //   dispatch({type:"incNumber"})
  // }
  return (
    <>

    <Request />

    {/* {state. counter}
    <button onClick={increaseHandler}>+</button>
    <button onClick={increaseByAmountHandler}>++</button>
    <button onClick={decreaseHandler}>-</button>
    <button onClick={resetHandler}>reset</button>
    
    {state.number}
    <button onClick={increaseNumber}>+number</button> */}
    
    </>
  )
}

export default App
