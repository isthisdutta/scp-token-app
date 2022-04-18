import React from 'react';
//imports 'useAuth0' from '@auth0.auth0react' which provides for the login functionality and generates the Login Button
import { useAuth0 } from '@auth0/auth0-react';
import "./Log.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
