import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch orders on component mount
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/getAllOrders', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setOrders(response.data.orders);
            } catch (err) {
                setError(err.response ? err.response.data.message : 'Error fetching orders');
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
        <ul>
          <div className="order-img">
            <img src={Auto} alt="" />
          </div>
          {orders.map((order) => (
            <li key={order.id}>
              <img src={order.image} alt={order.name} />
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Item:</strong> {order.item_name}
              </p>
              <p>
                <strong>Quantity:</strong> {order.quantity}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                <span className="price">${order.price}</span>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-orders">No orders found.</p>
      )}
    </div>
  );
};

export default OrderPage;
