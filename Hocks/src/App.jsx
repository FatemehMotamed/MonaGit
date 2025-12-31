import { BrowserRouter, Route, Routes } from "react-router-dom"
import ParentComponent from "./components/ParentComponent"
import Refcomponent from "./components/Refcomponent"
import TransitionComponent from "./components/TransitionComponent"
import CustomCumponent from "./components/CustomCumponent"


function App() {


  return (
    <>
      {/* <Refcomponent /> */}
      {/* <ParentComponent /> */}
      <TransitionComponent />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<TransitionComponent />} />
          <Route path="/memo" element={<ParentComponent />} />

        </Routes>
      </BrowserRouter> */}


      {/* <CustomCumponent /> */}
    </>
  )
}

export default App
