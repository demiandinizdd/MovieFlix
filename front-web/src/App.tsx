import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'core/assets/styles/custom.scss';
import Routes from './Routes';
import './App.scss';

const App = () => (
  <>
      <ToastContainer />
      <Routes />
  </>
);

export default App;