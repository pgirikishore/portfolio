import "./WorkCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

function displayProjectIcon (icon)
{
    console.log("Hi");
    return(
        <>
          <img src={icon} alt="icon" />
        </>
    );
}

function displayProject(project)
{
    return (
    <div className="card">
        <div className="card-header">
            <div className="card-header-heading">
                <h2>{project.name}</h2>
            </div>
            <div className="card-icons">
                {project.icon.map(displayProjectIcon)}
            </div>
        </div>
        <hr />
        <div className="card-para">
            <p>{project.desc}</p>
        </div>
        <div className="card-button">
            <a href={project.link}><button className="btn btn-light">Go to Project</button></a>
        </div>
    </div>
    );
}

const WorkCard = (props) => {
  return (
  <div className="project-title">
    <h1>{props.heading}</h1>
    <div className="card-container">
      {props.object.map(displayProject)}
    </div>
  </div>)
}

export default WorkCard