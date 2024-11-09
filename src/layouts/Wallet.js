import React from 'react'
import "./Wallet.css";
import Search from "./images/search.jpeg";

const Wallet = () => {
  return (
    <div class="wallet-container-all ">
     <div class="wallet-container">
    <div class="wallet-header">
      <h2>Wallet</h2>
      <div class="wallet-search-bar">
        <img src={Search} alt="Search Icon" />
        <input type="text" placeholder="Search Project" />
      </div>
    </div>
  
    <div class="wallet-columns">
      <div class="wallet-project-column">
        <h3>Project</h3>
        <div class="wallet-project-item">
          <i>1</i> Lorem ipsum is placeholder text commonly used in the graphic, print
        </div>
        <div class="wallet-project-item">
          <i>2</i> Lorem ipsum is placeholder text commonly used in the graphic, print
        </div>
        <div class="wallet-project-item">
          <i>3</i> Lorem ipsum is placeholder text commonly used in the graphic, print
        </div>
        <div class="wallet-project-item">
          <i>4</i> Lorem ipsum is placeholder text commonly used in the graphic, print
        </div>
      </div>
  
      <div class="wallet-budget-column">
        <h3>Budget</h3>
        <p>$400</p>
        <p>$400</p>
        <p>$400</p>
        <p>$400</p>
      </div>
  
      <div class="wallet-spend-column">
        <h3>Spend</h3>
        <p>$400</p>
        <p>$400</p>
        <p>$400</p>
        <p>$400</p>
  
        <div class="wallet-dropdown">
          <span>Design $200</span>
          <span>Retailer $200</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Wallet