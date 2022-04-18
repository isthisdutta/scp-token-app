import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// BrowserRouter and AuthProviderWithHistory maintains authentication for the entire app
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import './index.css';

// ReactDOm.render is a standard react function to generate the app
ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);