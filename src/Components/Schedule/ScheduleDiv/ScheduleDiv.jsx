import React from 'react'
import './ScheduleDiv.scss';

function ScheduleDiv(prop) {
  return (
    <div className='main-scheduleDiv'>
      <div className="class-name">
        <p>Class Name</p>
        <h6>{prop.className}</h6>
      </div>
      <div className="time">
        <p>Time</p>
        <h6>{prop.time}</h6>
      </div>
      <div className="trainer">
        <p>Trainer</p>
        <h6>{prop.trainer}</h6>
      </div>
      <button>Join Now</button>
    </div>
  )
}

export default ScheduleDiv
