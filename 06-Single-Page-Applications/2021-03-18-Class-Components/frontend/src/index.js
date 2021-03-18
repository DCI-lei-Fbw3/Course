import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import UserProvider from './context/UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* we wrap the App component with the UserProvider to have access to the context in the whole app */}
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
