import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth0 } from "@auth0/auth0-react";
import checkUpImage from './icon.png';

const Navbar = ({ title = 'Default Site Title', aboutText = 'This is the default about text.' }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg" style={{
      backgroundImage: 'linear-gradient(to right, #8BC34A, #4CAF50)',
      color: '#F7F7F7',
      fontWeight: 'bold'
    }}>
      <div className="container-fluid">
        <img src={checkUpImage} alt="Pregnancy Care" style={{ width: '25px', height: 'auto', borderRadius: 10, marginRight: '.5rem' }} />
        <Link className="navbar-brand" to="" style={{ color: '#F7F7F7' }}>PregnancyPal</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="" style={{ color: '#F7F7F7' }}>About</Link></li>

            
            <li className="nav-item"><Link className="nav-link" to="/form1" style={{ color: '#F7F7F7' }}>Pregnancy Confirmation</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/form2" style={{ color: '#F7F7F7' }}>Basic Information</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/form3" style={{ color: '#F7F7F7' }}>Pregnancy Concerns</Link></li>
          </ul>

          {isAuthenticated && (
            <li className="nav-item">
              <span style={{ color: '#F7F7F7' }}>{user.name}</span>
            </li>
          )}

          <li className="nav-item">
            {isAuthenticated ? (
              <button
                type="button"
                style={{
                  backgroundColor: '#34C759',
                  borderColor: '#34C759',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0.3em 0.8em',
                  width: '100px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  fontSize: '1em',
                  fontFamily: 'Open Sans, sans-serif',
                }}
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </button>
            ) : (
              <button
                type="button"
                style={{
                  backgroundColor: '#2196F3',
                  borderColor: '#2196F3',
                  color: '#F7F7F7',
                  borderRadius: '10px',
                  padding: '0.3em 0.8em',
                  width: '100px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  fontSize: '1em',
                  fontFamily: 'Open Sans, sans-serif',
                }}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

export default Navbar;