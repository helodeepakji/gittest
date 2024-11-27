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
import Contactpage from './layouts/Contactpage';

// business user page
import Bussiness from './Pages/Business';
import View from "./Pages/Component5/View"



// designer user page
import Designerpage from "./Pages/Designer";
import Wallet from './layouts/Wallet';
import Adv from './Pages/components3/Adv';
import Retailer from './Pages/Component4/Retailer';
import Viewpost from './layouts/Viewpost';
import EditProfile from './Pages/Component5/EditProfile';


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

        <Route path='/business/home' element={<ProtectedRoute element={<Bussiness />} />} />
        <Route path='/business/view' element={<ProtectedRoute element={<View />} />} />

        <Route path='/designer/home' element={<ProtectedRoute element={<Designerpage />} />} />
        <Route path='/designer/view' element={<ProtectedRoute element={<View />} />} />

        <Route path='/editprofile' element={<ProtectedRoute element={<EditProfile />} />} />
        <Route path='/viewpost' element={<ProtectedRoute element={<Viewpost />} />} />


        <Route path='/retailer/home' element={<ProtectedRoute element={<Retailer />} />} />
        <Route path='/wallet' element={<ProtectedRoute element={<Wallet />} />} />

        <Route path='/adv' element={<ProtectedRoute element={<Adv />} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
