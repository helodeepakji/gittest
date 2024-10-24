import React from "react";
import coffeepic from "../Component4/Assests/coffee.png";
import { LuTreeDeciduous } from "react-icons/lu";
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
          <div className="container">
            <div className="row">
              <div className="col-6">
                <button className="btn btn-primary btn1 w-100">
                  Accept Order
                </button>
              </div>
              <div className="col-4">
                <button className="btn btn-secondary btn2 w-100">
                  Details
                </button>
              </div>
            </div>
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
