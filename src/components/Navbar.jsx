import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Employee Manager Application
        </Link>
    
            <Link className='btn btn-outline-light' to="/adduser">Add Employee</Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar