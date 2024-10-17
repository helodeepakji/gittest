import React from "react";
import "./Designer.css";
import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";
import SubmittedDesigns from "./SubmittedDesigns";

const Designerpage = () => {
  return (
    <div className="main">
      <Sidebar />
      <ProjectCard />
      <SubmittedDesigns />
    </div>
  );
};

export default Designerpage;
