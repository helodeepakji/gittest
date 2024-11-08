import React from 'react'
import "./ProjectCard.css"
import Profile from "./images/profile-picture.webp"
import Project from './images/project-sample.png'
import Like from "./images/like.png"
import Comment from "./images/comment.png"
import Share from "./images/share.png"
import Save from "./images/save.png"
import Sensory from "./images/sensory.jpg"
import Photo from './images/photo.png'
import Video from "./images/video.png"
import Event from "./images/event.png"
import Post from "./images/post.png"
import Camera from "./images/camera.png"



const ProjectCard = () => {
  return (
    <div class="project-card-new0">
    <div class="project-card-new">
  
      <div class="message-container-new">
        <div class="profile-container-new">
          <img src={Profile} alt="Profile Picture" class="profile-pic-new" />
          <div class="camera-icon-new">
            <img src={Camera} alt="Camera Icon" />
          </div>
        </div>
        <input class="message-text-new cardin" placeholder='Do you want an advertisement ?' />
       
      </div>
  
      
      <hr />
      
      <div class="engagement-new">
      <div class="like-new">
          <img src={Photo} alt="Comment Icon" />  <span>Photo</span>
        </div>
        <div class="comment-new">
          <img src={Video} alt="Comment Icon" /> <span>Video</span>
        </div>
        <div class="share-new">
          <img src={Event} alt="Comment Icon" /> <span>Event</span>
        </div>
        <div class="save-new">
          <img src={Post} alt="Save Icon" /> <span>Write a post</span>
        </div> 
      </div>
  
      <br />
      <h3>Posted Project</h3>
     <br />  
      <div class="project-header-new">
        <div class="profile-info-new">
          <img src={Profile} alt="Profile Picture" />
          <div class="profile-details-new">
            <div class="name-new">Mickelson Klus</div>
            <div>Business owner of D House</div>
            <div>25 Nov at 12:44 PM</div>
          </div>
        </div>
      </div>
  
      <div class="project-description-new">
        Title: Display the title of the posted requirement.<br />
        Description: Show the detailed description of the requirement,
        including brand logo, identity, and desired message.
      </div>
  
      <img
        src={Project}
        alt="Project Sample"
        class="project-image-new"
      />
  
      <div class="engagement-new">
        <div class="like-new">
          <img src={Like} alt="Like Icon" /> <span>14</span>
        </div>
        <div class="comment-new">
          <img src={Comment} alt="Comment Icon" /> <span>52</span>
        </div>
        <div class="share-new">
          <img src={Share} alt="Share Icon" /> <span>10</span>
        </div>
        <div class="save-new">
          <img src={Save} alt="Save Icon" />
        </div>
      </div>
    </div>
  
    <br />
    <br />
    <div class="project-card-new">
      <div class="project-header-new">
        <div class="profile-info-new">
          <img src={Profile} alt="Profile Picture" />
          <div class="profile-details-new">
            <div class="name-new">Mickelson Klus</div>
            <div>Business owner of D House</div>
            <div>25 Nov at 12:44 PM</div>
          </div>
        </div>
      </div>
  
      <div class="project-description-new">
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy
          text ever since the 1500s.
        </p>
      </div>
  
      <img
        src={Sensory}
        alt="Project Sample"
        class="project-image-new"
      />
  
      <div class="engagement-new">
        <div class="like-new">
          <img src={Like} alt="Like Icon" /> <span>14</span>
        </div>
        <div class="comment-new">
          <img src={Comment} alt="Comment Icon" /> <span>52</span>
        </div>
        <div class="share-new">
          <img src={Share} alt="Share Icon" /> <span>10</span>
        </div>
        <div class="save-new">
          <img src={Save} alt="Save Icon" />
        </div>
      </div>
  
      <br />
      <br />
      <h2><a href="#" class="join-new">View New Projects</a></h2>
      <br />
    </div>
  </div>
  
 
  )
}

export default ProjectCard