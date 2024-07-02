import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ backgroundColor: '#A5D6A7' }}>
  <div className="container-fluid">
      <Link className="navbar-brand" to="/home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/form1">PregnancyConfirmation</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to="/form2">Basic Data entry</Link>
          </li>


          <ul class="nav nav-pills">
          <li class="nav-item position-absolute mx-2" style={{ top: '1', right: '0' }}>
          <Link style={{ width: '100px', backgroundColor: '#255438', color: '#fff' ,alignContent: 'start' }} class="nav-link active" to="/login">Login</Link>
         </li>
         </ul>
         


         </ul>    

      </div>
  </div>

</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
    };

