import React, { useState } from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <img src={process.env.PUBLIC_URL + '/flamelogo.png'} alt="Logo" className="img-fluid" height="50px" width="50px" style={{ marginLeft: "-15px" }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Electronics</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Careers
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Student Career</a></li>
                  <li><a className="dropdown-item" href="#">Jobs Postings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Salary Calculator</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={props.handleAllServiceClick} >All services </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

  )
}
