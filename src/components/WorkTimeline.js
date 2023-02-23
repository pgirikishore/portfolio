import "./WorkTimelineStyles.scss";
import portfolio from "../portfolio";

import React from 'react'

function displayWorkItems(workItem)
{
    return (
        <li>{workItem}</li>
    );
}

function displayWorkEntry(work)
{
    return(
        <div class="work-entry">
                <div class="work-title">
                    <h3>{work.time}</h3>
                    <p>{work.position}</p>
                    <p>{work.location}</p>
                </div>
                <div class="work-body">
                    <p>{work.companyName}</p>
                    <ul>
                    {work.desc.map(displayWorkItems)}
                    </ul>
                </div>
            </div>
    );
}

const WorkTimeline = () => {
  return (
    <>
    <h1 className="work-exp">Work Experience</h1>
    <div className="work-timeline-block">
        <div class="work-timeline">
            {portfolio.workExp.map(displayWorkEntry)}
        </div>
    </div>
    </>
  )
}

export default WorkTimeline