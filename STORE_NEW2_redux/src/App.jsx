import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import Basket from "./components/pages/Basket"
import PageDiscription from "./components/modules/PageDiscription"
import InputRefprovider from "./contexts/InputRefprovider"

function App() {

  return (
    <>
      <InputRefprovider>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:title/:id" element={<PageDiscription />} />
          <Route path='/Basket' element={<Basket />} />
        </Routes>

      </InputRefprovider>
    </>
  )
}

export default App
