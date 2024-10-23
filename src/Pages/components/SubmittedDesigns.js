import React from 'react'
import "./SubmittedDesigns.css"
import Profile2 from "./images/img 2.jpeg"
import Profile3 from "./images/img 3.jpg"
import Profile4 from "./images/img 4.jpg" 


const SubmittedDesigns = () => {
  return (
    <>
    <div class="submitted-designs-alt">
    <h2>Designer's shared Their design file</h2>
    <div class="design-card-alt">
        <div class="design-info-alt">
            <img src={Profile2} alt="Designer LIrofile" />
            <div class="design-details-alt">
                <div class="name-alt">Vishnu Kumar Agrawal</div>
                <div class="desc-alt">Graphic Designer at D Technology</div>
                <div class="desc-alt">25 Nov at 12:24 PM</div>
            </div>
        </div>
        <button class="view-button-alt">View</button>
    </div>

    <div class="design-card-alt">
        <div class="design-info-alt">
            <img src={Profile3} alt="Designer LIrofile" />
            <div class="design-details-alt">
                <div class="name-alt">Vishnu Kumar Agrawal</div>
                <div class="desc-alt">Ux Designer at D Technology</div>
                <div class="desc-alt">25 Nov at 12:24 PM</div>
            </div>
        </div>
        <button class="view-button-alt">View</button>
    </div>

    <div class="design-card-alt">
        <div class="design-info-alt">
            <img src={Profile4} alt="Designer LIrofile" />
            <div class="design-details-alt">
                <div class="name-alt">Vishnu Kumar Agrawal</div>
                <div class="desc-alt">Ux Designer at D Technology</div>
                <div class="desc-alt">25 Nov at 12:24 PM</div>
            </div>
        </div>
        <button class="view-button-alt">View</button>
    </div>

    <div class="view-all-link-alt">
        <a href="#">View all recommendations</a>
    </div>
</div>


    </>
  )
}

export default SubmittedDesigns