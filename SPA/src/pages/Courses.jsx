import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link, replace, useNavigate, useSearchParams } from 'react-router-dom'

function Courses() {
  const [query, setQuery] = useSearchParams()
  const navigate = useNavigate()
  const courses = [
    {id:1, name:"React.js"},
    {id:2, name:"python"},
    {id:3, name:"javascript"},
  ]
  const clickHandler = () =>{

    setQuery({price:"100000", order:"sale"})

    console.log(query);
    
  }
  const HomeHandler = ()=>{
    navigate("/", {replace:true})
  }
  return (
    <MainLayout >
     <div>
      <button onClick={clickHandler}>set query</button><br></br>
       {courses.map((course)=>(<><Link key={course.id} to={`/courses/${course.id}`}>{course.name}</Link><br></br></>))}
       <button onClick={HomeHandler}>Go Home</button>
     </div>
    </MainLayout>
  )
}

export default Courses