import React from "react";
import coffeepic from "../Component4/Assests/coffee.png";
const Cards = () => {
  return (
    <>
      <div className="card-div">
        <div className="card-img">
          <img src={coffeepic} alt="pic" />
        </div>
        <div className="card-details">
          <h4>Lorem epsum is simply dummy text of printing</h4>
          <p>Name</p>
          <p>contact</p>
          <p>Lorem epsum is simply dummy text of the printing</p>
          <h5>$200</h5>
          <p>Deadline 22 nov 2024</p>

          <div className="Retailerbutton">
            <button className="Retailerbtn1">Accept Orders</button>
            <button className="Retailerbtn2">Details</button>
          </div>
        </div>
        {/* <div className="card-ryt-icon">
<LuTreeDeciduous />

</div> */}
      </div>
    </>
  );
};

export default Cards;
