import React from 'react'
import './Header.css'
import logo from '../../assets/images/Shopping Lists logo.jpg'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
        <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/shoppingLists" className="nav-link">All Shopping Lists</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header