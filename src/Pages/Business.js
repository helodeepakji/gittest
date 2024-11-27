import React, { useEffect, useState } from 'react';
import './Business.css';
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import Top from "./components/Top";
import SubmittedDesigns from "./components/SubmittedDesigns";

const Business = () => {
    return (
        <div>
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

        </div>
    );
}


export default Business;