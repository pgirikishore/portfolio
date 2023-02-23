import "./ActivityTimeline.css"
import portfolio from "../portfolio"

import React from 'react'

function activityDisplay(activity)
{
  return(
    <div class="timeline__card act__card">
      <header class="card__header">
        <time class="time" datetime={activity.dateFormat}>
          <span class="time__day">{activity.date}</span>
          <span class="time__month">{activity.month}</span>
        </time>
        <h3 class="card__title r-title">{activity.title}</h3>
      </header>
      <div class="card__content">
        <p>{activity.detail}</p>
      </div>
    </div>
  )
}

function timelineGroupDisplay(activity)
{
  return(
    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">{activity.year}</span>
      <div class="timeline__cards">
        {activity.activities.map(activityDisplay)}
      </div>
    </div>
  )
}

const ActivityTimeline = () => {
  return (
  <div class ="act-page">
    <div class="page">
      <div class="timeline">
        {portfolio.activity.map(timelineGroupDisplay)}
      </div>
    </div>
  </div>

  )
}

export default ActivityTimeline