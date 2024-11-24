import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'; // No Router here

// layout page
import Header from './layouts/Header';
import Footer from './layouts/Footer';

// comman page
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Join from './Pages/Join';

// business user page
import Contactpage from './layouts/Contactpage';
import Designerpage from "./Pages/components2/Designerpage";
import Wallet from './layouts/Wallet';
import Bussiness from './Pages/Business';
import Adv from './Pages/components3/Adv';
import Retailer from './Pages/Component4/Retailer';
import Viewpost from './layouts/Viewpost';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const ProtectedRoute = ({ element }) => {
    // const token = localStorage.getItem('token');
    // if (token) {
      // const decodedToken = JSON.parse(atob(token.split('.')[1]));
      // // const currentTime = Date.now() / 1000;
      // // if (decodedToken.exp < currentTime) {
      // //   localStorage.removeItem('token');
      // //   setUser(null);
      // //   navigate('/login');
      // // } else {
        // setUser(decodedToken);
        return element;
      // }
    // } else {
    //   return <Navigate to="/login" />;
    // }
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/proceed' element={<Join />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/bussiness' element={<ProtectedRoute element={<Bussiness />} />} />
        <Route path='/viewpost' element={<ProtectedRoute element={<Viewpost />} />} />
        <Route path='/retailer' element={<ProtectedRoute element={<Retailer />} />} />
        <Route path='/wallet' element={<ProtectedRoute element={<Wallet />} />} />
        <Route path='/design' element={<ProtectedRoute element={<Designerpage />} />} />
        <Route path='/adv' element={<ProtectedRoute element={<Adv />} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
