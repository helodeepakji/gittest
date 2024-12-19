import React from 'react'
import { Link } from "react-router-dom";
import "./Top.css"
import Wallet from './images/wallet-icon.png'
import Design from './images/design-icon.png'
import Post from './images/post-icon.png'
import "./Top.css"

const Top = () => {
    return (
        <>
            <div class="card-container">
                <Link to="/business/service" class="card">
                    <div class="icon">
                        <span> <h3>Service & Products </h3>  </span>  <img src={Wallet} alt="Wallet Icon" />
                    </div>
                    <p>A detailed overview of the budget allocation and transaction history.</p>
                </Link>

                <div class="card">
                    <Link to="/business/view" className='card-1'>
                        <div class="icon">
                            <span> <h3>Design Selection</h3></span>    <img src={Design} alt="Design Icon" />
                        </div>
                        <p>A gallery to view and select designs submitted by designers.</p>
                    </Link>
                </div>

                <div class="card">
                    <Link to="/uploadDesign" className='card-1'>
                        <div class="icon">
                            <span> <h3>Upload Design</h3></span>   <img src={Post} alt="Post Icon" />
                        </div>

                        <p>If you have already design for ads then upload it.</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Top