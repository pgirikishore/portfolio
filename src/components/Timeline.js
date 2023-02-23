import "./TimelineStyles.css";
import portfolio from "../portfolio";

import React from 'react'

const Timeline = () => {
    // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  var items = document.getElementsByClassName("timeline-li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function displayWorkItems(workItem)
{
  return(
    <>
      <p>{workItem}</p>
      <br />
    </>
  )
}

function displayWork(work)
{
  return(
    <li className="timeline-li">
        <div>
            <h3>{work.companyName}</h3>
          <span>{work.position}</span><time>{work.time}</time>
          {work.desc.map(displayWorkItems)}
        </div>
     </li>
  );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }
  return (
    <div className="timeline-div">
    <ul className="timeline-ul">
      {portfolio.workExp.map(displayWork)}
    </ul>
    
  </div>
  )
}

export default Timeline