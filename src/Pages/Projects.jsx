import React from "react";
import ProjectItem from "../Componets/Projectitem";
import { Projectlist } from "./Helpers/Projectlist";
import "../Componets/Styles/Project.css"


export default function Projects() {
  return (
    <div className="projects">
      <h1 className="Per">My personal Projects</h1>
      <div className="projectList">
        {Projectlist.map((pro, idx) => {
          const {name, image}= pro
          return (
          
              <ProjectItem key={idx} id={idx} name={name} image={image} />
          
          );
        })}
      </div>
    </div>
  );
}


