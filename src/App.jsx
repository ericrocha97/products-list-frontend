//eslint-disable-next-line 
import React, { Component } from 'react'
//import Routes from './routes'
import Routes from './routes'


import './styles.css';

import Header from './components/Header';
//import Main from './pages/main';

//app

const App = () => (
  <div className = "App" >
        <Header/>
        <Routes />
      </div >
);


export default App
