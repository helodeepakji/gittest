import React from 'react'
import "./Productdesign.css"
import Cup from "./pic/cup.png"
import Profile from "./pic/Ellipse 2.png"
import Auto from "./pic/auto.png"
import Train from "./pic/train.png"
import Metro from "./pic/metro.png"
import Plane from "./pic/plane.png"

import  Papercup from "./pic/PaperCup.png"
import Paperplate from "./pic/Paperplate.png"
import Paperbag from "./pic/Paperbag.png"
import Pizza from "./pic/Pizza .png"
import Plus from "./pic/plus.png"

import  Half from "./pic/Half T shirt.png"
import Full from "./pic/T-shirt.png"
import Hoddies from "./pic/hoodies.png"
import Jackets from "./pic/Jackets.png"
import  Cap from "./pic/Cap.png"
import Handkerchiefs from "./pic/handkerchiefs.png"

import City from "./pic/city.png"
import Buildings from "./pic/buildings.png"
import Markets from "./pic/market.png"
import Mall from "./pic/malls.png"

import Water from "./pic/waterbottle.png"
import Wall from "./pic/wall.png"



const Product = () => {
  return (
    <div className='inventory-0-33'>
    <div class="inventory-33">
    <header class="inventory-header-33">
      <h1>Inventory <span>/current</span></h1>
    </header>
    
    <section class="requirement-section-33">
      <div class="image-gallery-33">
        <div class="thumbnails-33">
           <img src={Cup} alt="Main Image"/>
        </div>
      </div>
      <div class="requirement-details-33">
        <h2>Title: Display the title of the posted requirement.</h2>
        <p>Description: Show the detailed description of the requirement, including brand logo, identity, and desired message.</p>
        <div class="user-info-33">
          <div className='profile-pic-33'>
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
        <div class="actions-33">
          <button class="approved-33">Approved</button>
          <button class="chat-33">Chat</button>
        </div>
      </div>
    </section>
    
    <section class="advertisement-categories-33">
      <h2>Advertisement Categories</h2>
      
      <div class="category transport-33">
        <h3>Transport</h3>
        <div class="items-33">
          <div class="item-33"> <img src={Auto}/><br/>Auto Rickshaw</div>
          <div class="item-33"> <img src={Train}/><br/>Railway Train</div>
          <div class="item-33" ><img src={Metro}/><br/>Metro</div>
          <div class="item-33"> <img src={Plane}/><br/>Air Plane</div>
        </div>
      </div>
      
      <div class="category disposables-33">
        <h3>Disposables</h3>
        <div class="items-33">
          <div class="item-33"> <img src={Papercup}/><br/>Paper Cup</div>
          <div class="item-33"><img src={Paperbag}/><br/>Paper Bag</div>
          <div class="item-33"><img src={Paperplate}/><br/>Paper Plate</div>
          <div class="item-33"><img src={Pizza}/><br/>Pizza Box</div>
          <div class="item-33"><img src={Plus}/><br/>For Special Request</div>
        </div>
      </div>
      
      <div class="category clothing-33">
        <h3>Clothing</h3>
        <div class="items-33">
          <div class="item-33"><img src={Half}/><br/>Half Sleeves T-shirt</div>
          <div class="item-33"><img src={Full}/><br/>Full Sleeves T-shirt</div>
          <div class="item-33"><img src={Hoddies}/><br/>Hoodie's</div>
          <div class="item-33"><img src={Jackets}/><br/>Jacket's</div>
          <div class="item-33"><img src={Cap}/><br/>Cap</div>
          <div class="item-33"><img src={Handkerchiefs}/><br/>Handkerchiefs</div>
        </div>
      </div>
      
      <div class="category billboards-33">
        <h3>Bill Board</h3>
        <div class="items-33">
          <div class="item-33"><img src={City}/><br/>Holdings in City</div>
          <div class="item-33"><img src={Buildings}/><br/>Holdings on Buildings</div>
          <div class="item-33"><img src={Markets}/><br/>Holdings on Buildings</div>
          <div class="item-33"><img src={Mall}/><br/>Inside Malls</div>
          
        </div>
      </div>
      
      <div class="category water-bottles-33">
        <h3>Water Bottles</h3>
        <div class="items-33">
          <div class="item-33"><img src={Water}/><br/>Water Bottles</div>
        </div>
      </div>
      
      <div class="category walls-33">
        <h3>Walls</h3>
        <div class="items-33">
          <div class="item-33"><img src={Wall}/><br/>Walls</div>
        </div>
      </div>
    </section>
  </div>
    </div>
  )
}

export default Product
