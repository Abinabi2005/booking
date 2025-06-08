import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Flight from './components/Flight';



function App() {
  return (

      <Router>
         <Navbar />
         <Routes >
           <Route path='/' element={<Login />} />
           <Route path='/Home' element={<Home />} />
           <Route path='/Flight' element={<Flight />} />
         </Routes>
         <Footer />
      </Router>


  );
}

export default App;
