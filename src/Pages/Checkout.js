import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const design = location.state?.design || [];
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const fetchSelectedItems = async () => {
    if (selectedItems.length === 0) {
      console.warn("No items selected for checkout.");
      return; // Prevent unnecessary API call
    }
    try {
      const response = await axios.post("/api/selected-items", {
        selectedItems,
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching selected items:", error);
    }
  };

  const handleApplyDiscount = () => {
    setDiscountAmount(100);
  };

  useEffect(() => {
    const calculatedTotal = selectedItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotal(calculatedTotal);
  }, [selectedItems]);

  useEffect(() => {
    console.log("Selected Items:", selectedItems);
    fetchSelectedItems();
  }, []);

  return (
    <div className="checkout-container">
      <div>
        {selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <div className="ad-card-020" key={index}>
              <div className="ad-card-20">
                <div className="ad-image-20">
                  <div className="uploaded-design-020">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="uploaded-design-20">
                    <h3>Uploaded Design</h3>
                    <div className="design-images-20">
                      {design.image.map((imgSrc, index) => (
                        <img src={imgSrc} alt={`Uploaded Design ${index + 1}`} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ad-details-20">
                  <h2>{item.name}</h2>
                  <div className="quantity-control-20">
                    <div className="quantity-control-020">
                      Quantity : {item.quantity}
                    </div>
                    <a href="#" className="remove-btn-20">
                      Remove
                    </a>
                  </div>
                  <div className="options-20">
                    <h3>Selected options</h3>
                    <p>
                      <strong>Base Price:</strong> ₹{item.price}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                  </div>

                  <div className="item-total-20">
                    <h3>Item Total:</h3>
                    <p>{`₹${item.quantity * item.price}`}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items selected.</p>
        )}
      </div>
      <div className="all-body">
        <div class="delivery-card-200">
          <h2>
            Deliver to: <span>Klaus Michelson, 221002</span>{" "}
            <span class="office-label-200">OFFICE</span>
          </h2>
          <p class="address-200">1677 Round Top Rd, Harrisville, USA</p>
          <p class="note-200">
            Note: Address will be shared with your selected retailers
          </p>
          <div class="change-link-200">
            <a href="#">Change</a>
          </div>
        </div>
        <div class="checkout-card-30">
          <div className="discount-section-030">
            <div className="discount-section-30">
              <input
                type="text"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button onClick={handleApplyDiscount}>Apply</button>
            </div>
            <div class="summary-30">
              <p>
              </p>
              <p>
                Shipping Cost{" "}
                <span>
                  <del>&#8377; 40</del> FREE
                </span>
              </p>
              <p>
                Discount  <span>- &#8377; {discountAmount}</span>
              </p>

              <p class="highlight-30">
                Total Payable <span>&#8377; {total - discountAmount}</span>
              </p>
            </div>

            <div class="savings-30">
              Your Total Savings on this order &#8377; 80
            </div>
          </div>
          <div class="billing-option-30">
            <input type="checkbox" id="billing-address" checked />
            <label for="billing-address">
              Billing address is same as shipping
            </label>
          </div>
          <Link to="/payment" state={{ selectedItems: selectedItems, design: design, coupen: discountCode, pay_amount: total - discountAmount , amount :  total}} class="pay-button-30">Pay &#8377; {total - discountAmount}</Link>
          <div class="footer-30">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
