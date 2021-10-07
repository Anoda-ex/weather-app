import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  // <HashRouter basename={process.env.PUBLIC_URL}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </HashRouter>
  ,
  document.getElementById('root')
);
