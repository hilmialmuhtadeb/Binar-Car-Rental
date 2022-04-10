import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes'
import './index.scss'

ReactDOM.render(
  <>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);