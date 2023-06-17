import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Getaquote from './pages/Getaquote';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/getaquote' element={<Getaquote/>}/>
          </Routes>
      </Router>
      {/* <Index/> */}
    </div>
  );
}

export default App;
