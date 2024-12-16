import React from "react";
import "./Invoicepage.css"; 
import Logo from './ADJERRY SVG LOGO 2 1.png';
import invoicepic from './/image 2.png'

const Invoicepage = () => {
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
          <h2>Dev Gautam</h2>
          <p>Customer</p>
          <p>123 Anywhere St.<br /> Any City, ST 1245</p>
        </div>
        <div className="invoice-meta">
          <p><strong>Invoice Number:</strong> #233221</p>
          <p><strong>Due Date:</strong> 16 Dec, 2024</p>
          <p><strong>Invoice Date:</strong> 16 Dec, 2024</p>
        </div>
      </div>

      {/* Table Section */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>ITEM NO.</th>
            <th>ITEM DESCRIPTION</th>
            <th>QTY.</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td>WATER BOTTLE ADVERTISEMENT</td>
              <td>100</td>
              <td>$200.00</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Payment Section */}
      <div className="payment-section">
        <p><strong>Payment Method:</strong> 🏦</p>
        <p><strong>Account Name:</strong></p>
        <p><strong>Bank/Credit Card:</strong></p>
        <p><strong>Online Payment / UPI:</strong></p>
        <p><strong>SUBTOTAL:</strong> $1000</p>
        <p><strong>TAX:</strong> $10</p>
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
        <p>Epetsa Darcy<br />Administrator</p>
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
