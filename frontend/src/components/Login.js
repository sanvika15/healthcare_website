import React, { useState } from 'react';

function AuthPage() {
  const [authMode, setAuthMode] = useState('signin');

  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className="container-fluid  mx-4 my-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              {authMode === 'signin' ? (
                <SignInForm changeAuthMode={changeAuthMode} />
              ) : (
                <SignUpForm changeAuthMode={changeAuthMode} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SignInForm = ({ changeAuthMode }) => {
  return (
    <form>
      <h3 className="text-center  mx-1 my-1">Login</h3>
      <div className="form-group  mx-1 my-1">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter username" />
      </div>
      <div className="form-group mx-2 my-2">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <div className="form-group  mx-1 my-1">
        <button type="submit" className="btn btn-primary btn-block mx-1 my-1">
          Login
        </button>
      </div>
      <p className="text-center mx-1 my-1">
        Don't have an account? <span className="link-primary" onClick={changeAuthMode}>Sign Up</span>
      </p>
    </form>
  );
};

const SignUpForm = ({ changeAuthMode }) => {
  return (
    <form>
      <h3 className="text-center">Sign Up</h3>
      <div className="form-group ">
        <label>Full Name</label>
        <input type="text" className="form-control mx-1 my-1" placeholder="Enter full name" />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control mx-1 my-1" placeholder="Enter email address" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control mx-1 my-1" placeholder="Enter password" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control mx-1 my-1" placeholder="Confirm password" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block mx-1 my-1">
          Sign Up
        </button>
      </div>
      <p className="text-center">
        Already have an account? <span className="link-primary" onClick={changeAuthMode}>Sign In</span>
      </p>
    </form>
  );
};

export default AuthPage;