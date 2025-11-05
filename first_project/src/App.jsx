import TestComponent from "./TestComponent"

function App() {
  const name = "mona"

  return (
    <>
      <h1>my name is {name}</h1>
      {4*5}

      <TestComponent />
    </>
  )
}

export default App
