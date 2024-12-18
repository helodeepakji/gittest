import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Invoicepage.css";
import Logo from './ADJERRY SVG LOGO 2 1.png';
import invoicepic from './/image 2.png'
import axios from "axios";

const Invoicepage = () => {
  const { order_id } = useParams();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/getOrder/" + order_id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrder(response.data.orders);
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
    <div className="invoice-container">
      {/* Header Section */}
      <div className="invoice-header">
        <img
          src={Logo}
          alt="Company Logo"
          className="logo"
        />
        <div className="invoice-title">INVOICE</div>
      </div>

      {/* Invoice Details */}
      <div className="invoice-details">
        <div className="customer-details">
          <h4>Invoice to:</h4>
          <h2> {order.first_name}  {order.last_name}</h2>
          <h2> {order.email}</h2>
          <p>Customer</p>
          <p>123 Anywhere St.<br /> Any City, ST 1245</p>
        </div>
        <div className="invoice-meta">
          <p><strong>Invoice No: </strong> {order.order_id}</p>
          <p><strong>Transaction Id: </strong> {order.transaction_id}</p>
          <p> <strong> Payment Status : </strong>  {order.status} </p>
          <p><strong>Invoice Date: </strong>{new Date(order.created_at).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
            ,
            {new Date(order.created_at).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}</p>
        </div>
      </div>

      {/* Table Section */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>ITEM Name.</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {order.item.map((data) => (
            <tr key={data.id}>
              <td>{data.name} <img src={data.image} /></td>
              <td>{data.quantity}</td>
              <td>Rs. {data.price}</td>
              <td>Rs. {data.price * data.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Payment Section */}
      <div className="payment-section">
        <p><strong>SUBTOTAL:</strong> Rs. {order.amount}</p>
        <p><strong>Coupen Code:  {order.coupen}</strong></p>
        <p><strong>Discount:</strong> Rs. {order.amount - order.pay_amount}</p>
        <p><strong>Pay Amount:</strong> Rs. {order.pay_amount}</p>
      </div>

      {/* Terms and Conditions */}
      <div className="terms">
        <h2>Terms & Conditions</h2>
        <p>
          Please send payment within <span>30 days</span> of receiving this
          invoice. There will be a <span>1.5%</span> interest charge per month
          on late invoices.
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        Thank you for business with us! 💚
      </div>

      {/* Signature Section */}
      <div className="signature-section">
        <p>Adjerry India<br />Administrator</p>
        <img
          src={invoicepic}
          alt="Signature"
          className="signature"
        />
      </div>
    </div>
  );
};

export default Invoicepage;
