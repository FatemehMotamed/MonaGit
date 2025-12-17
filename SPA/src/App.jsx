import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePahe from "./pages/HomePahe"
import AboutUs from "./pages/AboutUs"
import Users from "./pages/Users"
import Courses from "./pages/Courses"
import PageNotFound from "./pages/PageNotFound"
import CourseSinglePage from "./pages/CourseSinglePage"
import Programmers from "./components/Programmers"
import Customers from "./components/Customers"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePahe />} />
        <Route path="/about" element={<AboutUs />} >

          <Route path="programmers" element={<Programmers />} />
          <Route path="customers" element={<Customers />} />
          
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseSinglePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>



    </>
  )
}

export default App
