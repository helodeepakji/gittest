import React from "react";
import "./components2/Designer.css";
import Sidebar from "./components2/Sidebar";
import ProjectCard from "./components2/ProjectCard";
import SubmittedDesigns from "./components2/SubmittedDesigns";

const Designer = () => {
  return (
    <div className="main">
      <Sidebar />
      <ProjectCard />
      <SubmittedDesigns />
    </div>
  );
};

export default Designer;
