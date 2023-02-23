import "./SkillsStyles.css";
import portfolio from "../portfolio";

import React from 'react'

function displaySkill(skill) {
    let key = Object.keys(skill);
    return (<a href={skill[key].Link}>
                <img src={skill[key].Icon} alt={skill[key].altText} />
            </a>);
}

const Skills = () => {

  return (
    <div className="skills-container">
        <h2>Skills</h2>
        <div className="tools-container">
            <h3>Tools</h3>
            {portfolio.skills.tools.map(displaySkill)}
        </div>
        <div className="languages-container">
            <h3>Languages</h3>
            {portfolio.skills.languages.map(displaySkill)}
        </div>
        <div className="tech-container">
            <h3>Technologies/Framework</h3>
            {portfolio.skills.tech.map(displaySkill)}
        </div>
        <div className="other-container">
            <h3>Others</h3>
            {portfolio.skills.other.map(displaySkill)}
        </div>
    </div>
  )
}

export default Skills