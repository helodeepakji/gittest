import React from 'react'
import './Productdesigncss'
import Cup from "./pictures/cup.png"
import Profile from "./pictures/Ellipse 2.png"
import Auto from './pictures/auto.png'
import Train from "./pictures/train.png"
import Metro from "./pictures/metro.png"
import Plane from "./pictures/plane.png"

import  Papercup from "./pictures/PaperCup.png"
import Paperplate from "./pictures/Paperplate.png"
import Paperbag from "./pictures/Paperbag.png"
import Pizza from "./pictures/Pizza .png"
import Plus from "./pictures/plus.png"

import  Half from "./pictures/Half T shirt.png"
import Full from "./pictures/T-shirt.png"
import Hoddies from "./pictures/hoodies.png"
import Jackets from "./pictures/Jackets.png"
import  Cap from "./pictures/Cap.png"
import Handkerchiefs from "./pictures/handkerchiefs.png"

import City from "./pictures/city.png"
import Buildings from "./pictures/buildings.png"
import Markets from "./pictures/market.png"
import Mall from "./pictures/malls.png"

import Water from "./pictures/waterbottle.png"
import Wall from "./pictures/wall.png"



const Productdesign = () => {
  return (
    <div className='inventory-0'>
    <div class="inventory">
    <header class="inventory-header">
      <h1>Inventory <span>/current</span></h1>
    </header>
    
    <section class="requirement-section">
      <div class="image-gallery">
        <div class="thumbnails">
           <img src={Cup} alt="Main Image"/>
        </div>
      </div>
      <div class="requirement-details">
        <h2>Title: Display the title of the posted requirement.</h2>
        <p>Description: Show the detailed description of the requirement, including brand logo, identity, and desired message.</p>
        <div class="user-info">
          <div className='profile-pic'>
            <img src={Profile} alt=''/>
          </div>
          <div>
          <span>Vishnu Kumar Agarwal</span>
          <br />
          <span>UI/UX Designer @ D Technology</span>
          <br />
          <span>25 Nov at 12:24 PM</span>
          </div>
        </div>
        <div class="actions">
          <button class="approved">Approved</button>
          <button class="chat">Chat</button>
        </div>
      </div>
    </section>
    
    <section class="advertisement-categories">
      <h2>Advertisement Categories</h2>
      
      <div class="category transport">
        <h3>Transport</h3>
        <div class="items">
          <div class="item"> <img src={Auto}/><br/>Auto Rickshaw</div>
          <div class="item"> <img src={Train}/><br/>Railway Train</div>
          <div class="item" ><img src={Metro}/><br/>Metro</div>
          <div class="item"> <img src={Plane}/><br/>Air Plane</div>
        </div>
      </div>
      
      <div class="category disposables">
        <h3>Disposables</h3>
        <div class="items">
          <div class="item"> <img src={Papercup}/><br/>Paper Cup</div>
          <div class="item"><img src={Paperbag}/><br/>Paper Bag</div>
          <div class="item"><img src={Paperplate}/><br/>Paper Plate</div>
          <div class="item"><img src={Pizza}/><br/>Pizza Box</div>
          <div class="item"><img src={Plus}/><br/>For Special Request</div>
        </div>
      </div>
      
      <div class="category clothing">
        <h3>Clothing</h3>
        <div class="items">
          <div class="item"><img src={Half}/><br/>Half Sleeves T-shirt</div>
          <div class="item"><img src={Full}/><br/>Full Sleeves T-shirt</div>
          <div class="item"><img src={Hoddies}/><br/>Hoodie's</div>
          <div class="item"><img src={Jackets}/><br/>Jacket's</div>
          <div class="item"><img src={Cap}/><br/>Cap</div>
          <div class="item"><img src={Handkerchiefs}/><br/>Handkerchiefs</div>
        </div>
      </div>
      
      <div class="category billboards">
        <h3>Bill Board</h3>
        <div class="items">
          <div class="item"><img src={City}/><br/>Holdings in City</div>
          <div class="item"><img src={Buildings}/><br/>Holdings on Buildings</div>
          <div class="item"><img src={Markets}/><br/>Holdings on Buildings</div>
          <div class="item"><img src={Mall}/><br/>Inside Malls</div>
          
        </div>
      </div>
      
      <div class="category water-bottles">
        <h3>Water Bottles</h3>
        <div class="items">
          <div class="item"><img src={Water}/><br/>Water Bottles</div>
        </div>
      </div>
      
      <div class="category walls">
        <h3>Walls</h3>
        <div class="items">
          <div class="item"><img src={Wall}/><br/>Walls</div>
        </div>
      </div>
    </section>
  </div>
    </div>
  )
}

export default Productdesign
