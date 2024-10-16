import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contactpage from './layouts/Contactpage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;
