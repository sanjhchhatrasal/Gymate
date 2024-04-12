import React from 'react'
import "./Classes.scss";
import TopImage from '../TopImage/TopImage'
import Card from './Card/Card';
import { bgimg , girlcycling , girlmeditation  , girlkarate, boypower, boyWorkout, bodybuilding, boyBoxing, crossfit, fitness2, mma, running, yoga} from '../Images/index';

function Classes() {
  return (
    <div className='main-classes'>
      <TopImage title="Classes" />
      <img src={bgimg} alt="" />
      <div className="cards">
        <Card img={girlcycling} title='Cycling' name='Dorian Yate' time="Wed: 9:00 am"/>
        <Card img={girlmeditation} title='Meditation' name='Maria Mich' time="Fri: 1:00 pm" />
        <Card img={boyBoxing} title='Boxing' name='John Flex' time="Tue: 4:00 pm" />
        <Card img={girlkarate} title='Karate' name='David Rich' time="Sat: 9:00 am" />
        <Card img={boypower} title='Power Lifting' name='Larry Wheels' time="Mon: 8:00 pm" />
        <Card img={boyWorkout} title='Workout' name='Shawn Ray' time="Sun: 10:00 am" />
        <Card img={crossfit} title='Crossfit' name='Jenifer Alex' time="Wed: 9:00 am" />
        <Card img={running} title='Running' name='Zinia Zessy' time="Fri: 6:00 am" />
      </div>
    </div>
  )
}

export default Classes
