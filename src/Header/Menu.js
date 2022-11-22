import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">Portfolio-Ganesh</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="menu">
                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <NavLink  to={`/home`} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/about`} className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/profile`} className="nav-link">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/portfolio`} className="nav-link">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu