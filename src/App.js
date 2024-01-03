// App.js
import React, { useState } from 'react';
import { Route,Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import './Assests/css/HomePage.css';
import BookingForm from './components/BookingForm';
import './Assests/css/BookingForm.css';
import Dashboard from './components/Dashboard';
import './Assests/css/Dashboard.css';
import LoginPage from './components/LoginPage';
import './Assests/css/LoginPage.css';
import SignUpPage from './components/SignUpPage';
import './Assests/css/SignUpPage.css';
import AboutPage from './components/AboutPage';

function App () {
  
  return (
    <>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "/Dashboard" element={<Dashboard/>}/>
      <Route path = "/SignUpPage" element={<SignUpPage/>}/>
      <Route path = "/LoginPage" element={<LoginPage/>}/>
      <Route path = "/BookingForm" element={<BookingForm/>}/>
      <Route path = "/AboutPage" element={<AboutPage/>}/>
      </Routes>
        </>
    
  );
}

export default App;
