import React from 'react'
import { useParams } from 'react-router-dom'

function CourseSinglePage() {
    const {id} = useParams()
  return (
    <div>CourseSinglePage {id}</div>
  )
}

export default CourseSinglePage