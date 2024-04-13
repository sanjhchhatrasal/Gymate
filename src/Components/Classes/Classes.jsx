import React,  { useState } from 'react'
import "./Classes.scss";
import TopImage from '../TopImage/TopImage'
import Card from './Card/Card';
import { bgimg , girlcycling , girlmeditation  , girlkarate, boypower, boyWorkout, bodybuilding, boyBoxing, crossfit, fitness2, mma, running, yoga} from '../Images/index';

function Classes() {
  const [showMore, setShowMore] = useState(false)

  const toggle = () =>{
    setShowMore(!showMore)
  }

  const allCards = [
    <Card key="cycling" img={girlcycling} title='Cycling' name='Dorian Yate' time="Wed: 9:00 am" />,
    <Card key="meditation" img={girlmeditation} title='Meditation' name='Maria Mich' time="Fri: 1:00 pm" />,
    <Card key="boxing" img={boyBoxing} title='Boxing' name='John Flex' time="Tue: 4:00 pm" />,
    <Card key="karate" img={girlkarate} title='Karate' name='David Rich' time="Sat: 9:00 am" />,
    <Card key="power" img={boypower} title='Power Lifting' name='Larry Wheels' time="Mon: 8:00 pm" />,
    <Card key="workout" img={boyWorkout} title='Workout' name='Shawn Ray' time="Sun: 10:00 am" />,
    <Card key="crossfit" img={crossfit} title='Crossfit' name='Jenifer Alex' time="Wed: 9:00 am" />,
    <Card key="running" img={running} title='Running' name='Zinia Zessy' time="Fri: 6:00 am" />,
    <Card key="bodybuilding" img={bodybuilding} title='Body Building' name='Jake Paul' time="Mon: 8:00 pm" />,
    <Card key="mma" img={mma} title='Mma' name='Becky Lynch' time="Fri: 6:00 am" />,
    <Card key="yoga" img={yoga} title='Yoga' name='Marta Mich' time="Wed: 8:00 am" />,
    <Card key="fitness2" img={fitness2} title='Fitness' name='Mia Malkova' time="Sun: 5:00 pm" />
  ]

  const visibleCards = showMore ? allCards : allCards.slice(0, 6);
 

  return (
    <div className='main-classes'>
      <TopImage title="Classes" />
      <img src={bgimg} alt="" />
      <div className="cards">
       {/*  <Card img={girlcycling} title='Cycling' name='Dorian Yate' time="Wed: 9:00 am"/>
        <Card img={girlmeditation} title='Meditation' name='Maria Mich' time="Fri: 1:00 pm" />
        <Card img={boyBoxing} title='Boxing' name='John Flex' time="Tue: 4:00 pm" />
        <Card img={girlkarate} title='Karate' name='David Rich' time="Sat: 9:00 am" />
        <Card img={boypower} title='Power Lifting' name='Larry Wheels' time="Mon: 8:00 pm" />
        <Card img={boyWorkout} title='Workout' name='Shawn Ray' time="Sun: 10:00 am" />
        <Card img={crossfit} title='Crossfit' name='Jenifer Alex' time="Wed: 9:00 am" />
        <Card img={running} title='Running' name='Zinia Zessy' time="Fri: 6:00 am" /> 
        <Card img={bodybuilding} title='Body Building' name='Jake Paul' time="Mon: 8:00 pm" />
        <Card img={mma} title='Mma' name='Becky Lynch' time="Fri: 6:00 am" />
        <Card img={yoga} title='Yoga' name='Marta Mich' time="Wed: 8:00 am" />
        <Card img={fitness2} title='Fitness' name='Mia Malkova' time="Sun: 5:00 pm" />*/}

        {visibleCards}

        {showMore && <button className='show-more-btn' onClick={toggle}>Show Less</button>}
       {!showMore &&  <button className='show-more-btn' onClick={toggle}>Show More</button>}
    </div>
    </div>
  )
}

export default Classes
