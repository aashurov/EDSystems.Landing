import React from 'react';
import logo from './logo.svg';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Getaquote from './pages/Getaquote';
import News from './pages/News';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import Calculate from './pages/Calculate';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/getaquote' element={<Getaquote/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/termscondition' element={<TermsCondition/>}/>
          <Route path='/calculate' element={<Calculate/>}/>
        </Routes>
      </Router>
      <ToastContainer />
      {/* <Index/> */}
    </div>
  );
}

export default App;
