import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'; // No Router here
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Join from './Pages/Join';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Contactpage from './layouts/Contactpage';
import Designerpage from "./Pages/components2/Designerpage";
import Wallet from './layouts/Wallet';
import Bussiness from './Pages/components/Bussiness';
import Adv from './Pages/components3/Adv';
import Retailer from './Pages/Component4/Retailer';
import Viewpost from './layouts/Viewpost';

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUser(decodedToken);
      if(decodedToken.user_type === 'business'){
        navigate('/bussiness');
      }else if (decodedToken.user_type === 'designer') {
        navigate('/design');
      } else if (decodedToken.user_type === 'retailer') {
        navigate('/retailer');
      }else {
        navigate('/'); 
      }

    } else {
      setUser(null);
    }
  }, [location,navigate]);

  const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <Header user={user} />
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
