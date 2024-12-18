import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";  
import { Link, useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders on component mount
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/getAllOrders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrders(response.data.orders);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "Error fetching orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="order-container">
      <h1>Your Orders</h1>
      {orders && orders.length !== 0 ? (
        orders.map((item,index) => (
          // <link to='/orders/invoice'>
          <ul onClick={()=>navigate('/orders/invoice/'+item.order_id)}>
            <div className="order-img d-flex">
           { item.item.map((product,index) => (
              <img src={product.image} alt={product.name} />
  
            ))}
            </div>
          
            <li key={index}>
              <p>
                <strong>Order ID:</strong> {item.order_id}
              </p>

              <p>
                <strong>Item:</strong>  { item.item.map((product,index) => (
    
                    product.name +  " x " + product.quantity + " , "
            ))}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                <span className="price">Rs.{item.pay_amount}</span>

              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </p>
            </li>
          </ul>
          // </link>
        ))
      ) : (
        <p className="no-orders">No orders found.</p>
      )}
    </div>
  );
};

export default OrderPage;







