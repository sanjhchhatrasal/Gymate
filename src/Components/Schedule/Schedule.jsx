import React, { useState } from 'react'
import './Schedule.scss';
import TopImage from '../TopImage/TopImage'
import ScheduleDiv from './ScheduleDiv/ScheduleDiv';

function Schedule() {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  
  return (
    <div className='main-schedule'>
      <TopImage title="Schedule by Day" />
      <div id="content">
        <div className="buttons">
          <button onClick={() => handlePageChange(1)} className={`btn ${activePage === 1 ? 'active' : ''}`}>Monday</button>
          <button onClick={() => handlePageChange(2)} className={`btn ${activePage === 2 ? 'active' : ''}`}>Tuesday</button>
          <button onClick={() => handlePageChange(3)} className={`btn ${activePage === 3 ? 'active' : ''}`}>Wednesday</button>
          <button onClick={() => handlePageChange(4)} className={`btn ${activePage === 4 ? 'active' : ''}`}>Thursday</button>
          <button onClick={() => handlePageChange(5)} className={`btn ${activePage === 5 ? 'active' : ''}`}>Friday</button>
          <button onClick={() => handlePageChange(6)} className={`btn ${activePage === 6 ? 'active' : ''}`}>Saturday</button>
          <button onClick={() => handlePageChange(7)} className={`btn ${activePage === 7 ? 'active' : ''}`}>Sunday</button>
        </div>

        <div className={`monday day ${activePage === 1 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Fitness' time= '9:00am - 10:00am' trainer ='David Vila' />
          <ScheduleDiv className = 'Body Building' time= '10:00pm - 11:00pm' trainer ='John Weights'/>
          <ScheduleDiv className = 'Running' time= '4:00pm - 5:00pm' trainer ='Junifor Jonas'/>
          <ScheduleDiv className = 'Cycling' time= '6:00pm - 7:00pm' trainer ='Robert Louis'/>
        </div>
        <div className={`tuesday day ${activePage === 2 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Boxing' time= '9:00am - 10:00am' trainer ='Mike Tyson'/>
          <ScheduleDiv className = 'Yoga' time= '10:00pm - 11:00pm' trainer ='Mia Kha'/>
          <ScheduleDiv className = 'Crossfit' time= '4:00pm - 5:00pm' trainer ='Cristofer Columbo'/>
        </div>
        <div className={`wednesday day ${activePage === 3 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Cycling' time= '9:00am - 10:00am' trainer ='Mario Vreco'/>
          <ScheduleDiv className = 'Body Building' time= '10:00pm - 11:00pm' trainer ='John Weights'/>
          <ScheduleDiv className = 'Fitness' time= '4:00pm - 5:00pm' trainer ='Tom Rizzly'/>
          <ScheduleDiv className = 'Running' time= '6:00pm - 7:00pm' trainer ='Michael Jonson'/>
        </div>
        <div className={`thursday day ${activePage === 4 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Fitness' time= '9:00am - 10:00am' trainer ='David Vila'/>
          <ScheduleDiv className = 'Body Building' time= '10:00pm - 11:00pm' trainer ='John Weights'/>
          <ScheduleDiv className = 'Running' time= '4:00pm - 5:00pm' trainer ='Junifor Jonas'/>
        </div>
        <div className={`friday day ${activePage === 5 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Crossfit' time= '9:00am - 10:00am' trainer ='Mike Mich'/>
          <ScheduleDiv className = 'Karate' time= '10:00pm - 11:00pm' trainer ='John Jones'/>
          <ScheduleDiv className = 'Meditation' time= '4:00pm - 5:00pm' trainer ='Lara Croft'/>
          <ScheduleDiv className = 'Workout' time= '6:00pm - 7:00pm' trainer ='Lary Wheels'/>
        </div>
        <div className={`saturday day ${activePage === 6 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Power Lifting' time= '9:00am - 10:00am' trainer ='David Laid'/>
          <ScheduleDiv className = 'Boxing' time= '10:00pm - 11:00pm' trainer ='Tyson Fury'/>
          <ScheduleDiv className = 'Yoga' time= '4:00pm - 5:00pm' trainer ='Milica Tails'/>
        </div>
        <div className={`sunday day ${activePage === 7 ? 'active' : ''}`}>
          <ScheduleDiv className = 'Cycling' time= '6:00pm - 7:00pm' trainer ='Robert Louis'/>
          <ScheduleDiv className = 'Running' time= '4:00pm - 5:00pm' trainer ='Junifor Jonas'/>
          <ScheduleDiv className = 'Crossfit' time= '9:00am - 10:00am' trainer ='David Vila'/>
          <ScheduleDiv className = 'Body Building' time= '10:00pm - 11:00pm' trainer ='John Weights'/>
        </div>
      </div>
    </div>
  )
}

export default Schedule
