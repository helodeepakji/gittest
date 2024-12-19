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
import Checkout from './Pages/Checkout';
import Contactpage from './layouts/Contactpage';


// business user page
import Bussiness from './Pages/Business';
import Orders from './Pages/Orders';
import View from "./Pages/Component5/View"
import Productdesign from './Pages/component6/Productdesign';
import Payment from "./Pages/component6/Payment"
import Service from "./Pages/component6/Service"



// designer user page
import Designerpage from "./Pages/Designer";
import Wallet from './layouts/Wallet';
import Adv from './Pages/components3/Adv';
import Retailer from './Pages/Component4/Retailer';
import EditProfile from './Pages/Component5/EditProfile';
import Profile from './Pages/Component5/Profile/Profile';
import Invoicepage from './Pages/Invoicepage';



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
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup/:type' element={<Signup />} />
        <Route path='/proceed' element={<Join />} />
        <Route path='/contact' element={<Contactpage />} />

        
        <Route path='/business/home' element={<ProtectedRoute element={<Bussiness />} />} />
        <Route path='/business/view' element={<ProtectedRoute element={<View />} />} />
        <Route path='/business/view/:ads_id' element={<ProtectedRoute element={<View />} />} />
        <Route path='/business/wallet' element={<ProtectedRoute element={<Wallet />} />} />
        <Route path='/business/orders' element={<ProtectedRoute element={<Orders />} />} />
        <Route path='/orders/invoice/:order_id' element={<ProtectedRoute element={<Invoicepage />} />} />
        <Route path='/business/service' element={<ProtectedRoute element={<Service />} />} />
        
        
        <Route path='/designer/home' element={<ProtectedRoute element={<Designerpage />} />} />
        <Route path='/designer/view' element={<ProtectedRoute element={<View />} />} />
        <Route path='/designer/wallet' element={<ProtectedRoute element={<Wallet />} />} />
        
        <Route path='/productdesign/:id' element={<ProtectedRoute element={<Productdesign />}/>} />
        
        <Route path='/editprofile' element={<ProtectedRoute element={<EditProfile />} />} />

        <Route path='/retailer/home' element={<ProtectedRoute element={<Retailer />} />} />
        <Route path='/retailer/wallet' element={<ProtectedRoute element={<Wallet />} />} />

        <Route path='/uploadDesign' element={<ProtectedRoute element={<Adv />} />} />
        <Route path='/checkout' element={<ProtectedRoute element={<Checkout />} />} />
        <Route path='/payment' element={<ProtectedRoute element={<Payment />} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
