import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function NavBar() {
  return (
    <>
        <NavLink to="/">Home | </NavLink>
        <NavLink to="/courses">Courses |</NavLink>
        <NavLink to="/about">About Us | </NavLink>
        <NavLink to="/users">Users | </NavLink>
    </>
  )
}

export default NavBar