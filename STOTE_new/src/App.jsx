// import { useState } from 'react'

import { Route, Routes } from "react-router-dom"
import ProductsProvider from "./contexts/ProductsProvider"
import HomePage from "./pages/HomePage"
import AllCards from "./pages/AllCards"
import SearchCategory from "./pages/SearchCategory"
import BoxForAll from "./components/BoxForAll"

function App() {

  return (
    <>

      <ProductsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<BoxForAll />} />
          <Route path='/AllCards' element={<AllCards />} />
          <Route path='/searchCategory' element={<SearchCategory />} />

        </Routes>
      </ProductsProvider>

    </>
  )
}

export default App
