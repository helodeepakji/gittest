import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
import lorem from "./components3/lorem.png";
import Add from "./component6/pic/addd.png";
import minus from "./component6/pic/minus.png";

const Checkout = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Decrement quantity for a specific item
  const decrementQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

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
                      <img src={lorem} alt="Uploaded Design 1" />
                      <img src={lorem} alt="Uploaded Design 2" />
                    </div>
                    <button className="edit-btn-20">Edit</button>
                  </div>
                </div>
                <div className="ad-details-20">
                  <h2>{item.name}</h2>
                  <div className="quantity-control-20">
                    <div className="quantity-control-020">
                      <img
                        src={minus}
                        onClick={() => decrementQuantity(index)}
                      />
                      <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                      <img src={Add} onClick={() => incrementQuantity(index)} />
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
                    <p>
                      <strong>Size:</strong> 203 x 254 mm
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
            <div class="discount-section-30">
              <input
                type="text"
                placeholder="Discount Code"
                value="Apply Coupon"
              />
              <button>Apply</button>
            </div>
            <div class="summary-30">
              <p>
                Subtotal (3 Services) <span>&#8377; 1200</span>
              </p>
              <p>
                Shipping Cost{" "}
                <span>
                  <del>&#8377; 40</del> FREE
                </span>
              </p>
              <p>
                Discount (10%) <span>- &#8377; 80</span>
              </p>
            
              <p class="highlight-30">
                Total Payable <span>&#8377; 1200</span>
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
          <button class="pay-button-30">Pay &#8377; 1200</button>
          <div class="footer-30">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
