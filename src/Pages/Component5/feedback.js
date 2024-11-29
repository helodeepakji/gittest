import React, { useState } from "react";
import "./feedback.css";

const Feedback = () => {
  const [sliderValue, setSliderValue] = useState(3); // Default to middle emoji

  // Function to handle slider change
  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  return (
    <div class="form-container-all-section">
      <div class="form-container-section-1">
        <h2>Feedback Form</h2>
        <div class="form-container">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Write here..."
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="yourname@example.com"
                required
              />
            </div>

            <div class="slider-container">
              <label>Share your experience in scaling</label>
       <div class="emoji-labels">
      <div class="emoji">
        <span className={sliderValue === 1 ? "selected" : ""}>😣</span>
        <p>Worst</p>
      </div>
      <div class="emoji">
        <span className={sliderValue === 2 ? "selected" : ""}>🙁</span>
        <p>Not Good</p>
      </div>
      <div class="emoji" >
        <span className={sliderValue === 3? "selected" : ""}>😐</span>
        <p>Fine</p>
      </div>
      <div class="emoji" >
        <span className={sliderValue === 4 ? "selected" : ""}>🙂</span>
        <p>Look Good</p>
      </div>
      <div class="emoji" >
        <span className={sliderValue === 5 ? "selected" : ""}>😍</span>
        <p>Very Good</p>
      </div>
    </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={sliderValue}
                onChange={handleSliderChange}
              />
            </div>
            <div class="form-group">
              <label for="comments">Add your comments</label>
              <textarea
                id="comments"
                placeholder="Write your comments here..."
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
