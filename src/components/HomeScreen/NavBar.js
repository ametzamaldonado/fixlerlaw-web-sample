import React from 'react'
import logo from '../../assets/Montserrat-header.png';
import "./NavBar.css"

function NavBar() {
    return (
        <>
        <header>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">
                        {/* Logo */}
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="300px" height="auto" className="d-inline-block align-text-top" />
                        </a>

                        {/* Collapse Button Toggle */}
                        <button
                            className="navbar-toggler"
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto b2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Attorneys</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Practice Areas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            </header>
        </>
    )
}

export default NavBar