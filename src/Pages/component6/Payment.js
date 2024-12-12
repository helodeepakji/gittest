import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const design = location.state?.design || {};
  const selectedItems = location.state?.selectedItems || [];
  const amount = location.state?.amount || 0;
  const pay_amount = location.state?.pay_amount || 0;
  const coupen = location.state?.coupen || "";
  const design_id = design.id;
  const order_id =  `ORD${Date.now()}`;

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handlePayment = async () => {
      const orderData = {
        items: selectedItems,
        order_id: order_id,
        design_id,
        amount,
        pay_amount,
        coupen,
      };

      try {
        setIsSubmitting(true);

        const response = await axios.post("/api/booking", orderData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // Assuming token authentication
        });

         // PhonePe payment details
         const KEYINDEX = "1";
        //  const MERCHANTID = "DEEPAKMONLINE";
        //  const APIKEY = "043c8c98-630b-4552-84f0-700041c6a44c";
        //  const APIURL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

         const MERCHANTID = "PGTESTPAYUAT86";
         const APIKEY = "96434309-7796-489d-8924-ab56988a6076";
         const APIURL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

         const paymentData = {
          merchantId: MERCHANTID,
          merchantTransactionId: `MUID${Math.random().toString(36).substr(2, 9)}`,
          merchantUserId: "USER_ID",
          amount: pay_amount * 100, // Convert to paise
          redirectUrl: `${window.location.origin}/api/payment-status/${order_id}`,
          redirectMode: "POST",
          callbackUrl: `${window.location.origin}/api/payment-status/${order_id}`,
          merchantOrderId: order_id,
          first_name: design.first_name || "User",
          last_name: design.last_name || "Name",
          message: "Payment for Product/Service",
          email: design.email || "user@example.com",
          mobileNumber: design.phone || "9999999999",
          paymentInstrument: {
            type: "PAY_PAGE",
          },
        };

        const jsonPayload = JSON.stringify(paymentData);
        const payloadMain = btoa(jsonPayload);
        const payload = `${payloadMain}/pg/v1/pay${APIKEY}`;
        const checksum = CryptoJS.SHA256(payload).toString(CryptoJS.enc.Hex);
        const xVerifyHeader = `${checksum}###${KEYINDEX}`;

        const phonePeResponse = await axios.post(
          "/api/phonepe-payment",
          { payload: payloadMain, xVerifyHeader },
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );        

        const paymentResponse = phonePeResponse.data;
        if (paymentResponse.success) {
          const redirectUrl = paymentResponse.data.instrumentResponse.redirectInfo.url;
          window.location.href = redirectUrl; // Redirect to PhonePe payment page
        } else {
          alert("Payment initiation failed. Please try again.");
        }

      } catch (error) {
        console.error("Error submitting order:", error.response?.data || error.message);
        alert("Failed to submit the order. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };

    handlePayment();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      {isSubmitting && <p>Processing your payment...</p>}
    </div>
  );
};

export default Payment;
