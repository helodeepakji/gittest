import React from 'react'
import "./Top.css"
import Wallet from './images/wallet-icon.png'
import Design from './images/design-icon.png'
import Post from './images/post-icon.png'
import "./Top.css"

const Top = () => {
  return (
   <>
    <div class="card-container">
        <div class="card">
            <div class="icon">
                <span> <h3>Wallet</h3>  </span>  <img src={Wallet} alt="Wallet Icon"  />
            </div>
            <p>A detailed overview of the budget allocation and transaction history.</p>
        </div>

        <div class="card">
            <div class="icon">
                <span> <h3>Design Selection</h3></span>    <img src={Design} alt="Design Icon" />
            </div>
       
            <p>A gallery to view and select designs submitted by designers.</p>
        </div>

        <div class="card">
            <div class="icon">
                <span> <h3>Post Management</h3></span>   <img src={Post} alt="Post Icon" />
            </div>
          
            <p>Tools to create, edit, and delete posts.</p>
        </div>
    </div>
   </>
  )
}

export default Top