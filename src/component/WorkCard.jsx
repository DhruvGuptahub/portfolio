import React from 'react'
import "./WorkCardStyles.css"
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
  return (
      <div className='project-card'>
          <img src={props.imgsrc} alt='image' />
          <h2 className='project-title'>{props.title}</h2>
          <div className='pro-details'>
              <p>{props.text}</p>
              <div className='pro-btns'>
                  <NavLink to={props.view} className="btn">View</NavLink>
                  <NavLink to={props.source} className="btn">Source code</NavLink>
              </div>
          </div>
      </div>
  )
}

export default WorkCard
