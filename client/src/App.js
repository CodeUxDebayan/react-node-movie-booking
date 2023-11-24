import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Hero} from './components/Hero.jsx';
import {NowShowing} from './components/NowShowing.jsx';
import {ComingSoon} from './components/ComingSoon.jsx';
import {Advertisement} from './components/Advertisement.jsx';
import { Showtimes } from './pagelayouts/Showtimes.jsx';
import { Main } from './pagelayouts/Main.jsx';
import { Theaters } from './pagelayouts/Theaters.jsx';
import { AboutUs } from './pagelayouts/AboutUs.jsx';
import { Contact } from './pagelayouts/Contact.jsx';
import { Login } from './pagelayouts/Login.jsx';

import './App.css';
function App() {


  return (

    <Router >
  <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} >
        <Route index element={
        <>
        <Hero/>
        <NowShowing/>
        <ComingSoon/>
        <Advertisement/>
        </>} 
        />
        <Route path="/Showtimes" element={<Showtimes/>} 
        />
        <Route path="/Theaters" element={<Theaters/>} 
        />
        <Route path="/AboutUs" element={<AboutUs/>} 
        />
        <Route path="/Contact" element={<Contact/>} 
        />
        <Route path="/Login" element={<Login/>} 
        />
        
        </Route>
        
      </Routes>
  </div>
</Router>
  );
}

export default App;
