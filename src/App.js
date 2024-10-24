import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Join from './Pages/Join';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contactpage from './layouts/Contactpage';
import Designerpage from "./Pages/components2/Designerpage"
import Wallet from './layouts/Wallet';
import Bussiness from './Pages/components/Bussiness'
import Buisness from './Pages/components3/Buisness';


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/join' element={<Join />} />
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path='/design' element={<Designerpage/>}/>
        <Route path ='/wallet' element={<Wallet/>}/>
        <Route path ='/bussiness' element={<Bussiness/>}/>
        <Route path ='/business' element={<Buisness/>}/>
  
     
      </Routes>
    
      <Footer />
    </Router>
  );
}

export default App;


