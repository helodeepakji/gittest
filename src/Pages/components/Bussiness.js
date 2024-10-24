import React from "react";
import "./Bussiness.css";
import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";
import SubmittedDesigns from "./SubmittedDesigns";
import Top from "./Top"

const Designerpage = () => {
  return (
    <>
    <div className="main0">
      <Sidebar />
      <div className="main1"> 
        <Top />
        <div className="main2">
        <ProjectCard />
        <SubmittedDesigns />
        </div>
        </div>
     </div>
    
    </>
  );
};

export default Designerpage;
