import React from "react"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="navbar">
      <Link to='/'>Back</Link>
      <h1>Home</h1>
    </nav>
  )
}

export default Navbar
