import React from 'react'
import { NavLink } from 'react-router-dom'
import navbarStyle from  "./Navbar.module.css"
const Navbar = () => {
  return (
    <React.Fragment>
    <header className = {`${navbarStyle.myNav}`}>
        <nav className={`navbar navbar-expand-lg navbar-dark ${navbarStyle.myNavBackground}  p-4`}>
                <div className="container">
                    <a className="navbar-brand text-white text-uppercase" href="#">START FRAMEWORK</a>
                    <button className={`navbar-toggler p-2 ${navbarStyle.toggleStyle}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                                <NavLink className={`nav-link my-nav text-white text-uppercase ${navbarStyle.linkColor}`} to="/about">about</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className={`nav-link text-white text-uppercase ${navbarStyle.linkColor}`} to="/portfolio">portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link text-white text-uppercase ${navbarStyle.linkColor}`} to="/contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    </header>
</React.Fragment>
  )
}

export default Navbar