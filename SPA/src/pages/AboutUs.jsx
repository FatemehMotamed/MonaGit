import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link, Outlet } from 'react-router-dom'

function AboutUs() {
  return (
    <MainLayout >
      <div>AboutUs</div>
      <Link to="programmers">Programmers</Link>
      <Link to="customers">Customers</Link>
      <Outlet />

    </MainLayout>
  )
}

export default AboutUs