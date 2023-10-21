// React Import
import React from 'react';
import ReactDOM from 'react-dom/client';

// Other Libraries

// Global Components

// Components
import App from './App';

// Icons

// Assets
import './index.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
