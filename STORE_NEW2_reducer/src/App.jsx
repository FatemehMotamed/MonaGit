import { Route, Routes } from "react-router-dom"
import ProductsProvider from "./contexts/ProductsProvider"
import HomePage from "./pages/HomePage"
import Basket from "./pages/Basket"
import PageDiscription from "./components/PageDiscription"

function App() {

  return (
    <>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<PageDiscription />} />
          <Route path='/Basket' element={<Basket />} />

        </Routes>
      </ProductsProvider>
    </>
  )
}

export default App
