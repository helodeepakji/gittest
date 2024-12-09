import React from 'react';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const design = location.state?.design || [];
  const amount = location.state?.amount || 0;
  return (
    <div>
      
    </div>
  )
}

export default Payment
