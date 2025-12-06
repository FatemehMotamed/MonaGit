import { BrowserRouter,Routes, Route } from "react-router-dom"
import HomePahe from "./pages/HomePahe"
import AboutUs from "./pages/AboutUs"
import Users from "./pages/Users"
import Courses from "./pages/Courses"

function App() {

  return (
    <>

      <Routes>
          <Route path="/" element={<HomePahe />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    

      
    </>
  )
}

export default App
