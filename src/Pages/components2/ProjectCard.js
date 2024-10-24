import React from 'react'
import "./ProjectCard.css"
import Profile from "./image/profile-picture.webp"
import Project from './image/project-sample.png'
import Like from "./image/like.png"
import Comment from "./image/comment.png"
import Share from "./image/share.png"
import Save from "./image/save.png"
import Sensory from "./image/sensory.jpg"
import Group1 from "./image/Group (1).png"

const ProjectCard = () => {
  return (
    <div class="project-card0">
      <div class="project-card">
      <img src={Group1} alt='Group1 png' />
        <h3>
          Ready to create amazing designs ? Check out the latest project and
          start earing today.
        </h3>
        <hr />
        <div class="project-header">
          <div class="profile-info">
            <img src={Profile} alt="Profile Picture" />
            <div class="profile-details">
              <div class="name">Mickelson Klus</div>
              <div>Business owner of D House</div>
              <div>25 Nov at 12:44 PM</div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="button submit-button">Submit Project</button>
            <button class="button view-button">View</button>
          </div>
        </div>

       
        <div class="project-description">
          Title: Display the title of the posted requirement.<br />
          Description: Show the detailed description of the requirement,
          including brand logo, identity, and desired message.
        </div>

       
        <img
          src={Project}
          alt="Project Sample"
          class="project-image"
        />

       
        <div class="engagement">
          <div class="like">
            <img src={Like} alt="Like Icon" /> <span>14</span>
          </div>
          <div class="comment">
            <img src={Comment} alt="Comment Icon" /> <span>52</span>
          </div>
          <div class="share">
            <img src={Share} alt="Share Icon" /> <span>10</span>
          </div>
          <div class="save">
            <img src={Save} alt="Save Icon" />
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="project-header">
          <div class="profile-info">
            <img src={Profile} alt="Profile Picture" />
            <div class="profile-details">
              <div class="name">Mickelson Klus</div>
              <div>Business owner of D House</div>
              <div>25 Nov at 12:44 PM</div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="button submit-button">Submit Project</button>
            <button class="button view-button">View</button>
          </div>
        </div>

  
        <div class="project-description">
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>
        </div>

     
        <img
          src={Sensory}
          alt="Project Sample"
          class="project-image"
        />

        <div class="engagement">
          <div class="like">
            <img src={Like} alt="Like Icon" /> <span>14</span>
          </div>
          <div class="comment">
            <img src={Comment} alt="Comment Icon" /> <span>52</span>
          </div>
          <div class="share">
            <img src={Share} alt="Share Icon" /> <span>10</span>
          </div>
          <div class="save">
            <img src={Save} alt="Save Icon" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2><a href="#" class="join">View New Projects </a></h2>
        <br />
      </div>
    </div>
 
  )
}

export default ProjectCard