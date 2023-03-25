import Divider from 'components/Divider/divider';
import MainCard from 'components/MainCard';
import MyCalendar  from './Calender';
import { Draggable, Droppable } from 'react-drag-and-drop';
import './styles.css';
import moment from "moment";
import { useEffect, useState } from 'react';

const CalenderEvents = ({}) => {
   const [events,setEvents]=useState([])
   const [render,setRender]=useState(false)
   const [startEvents,setStartevents]=useState([{
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
  },{
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Sadsfas",
  }])
   


   const  handleDrop=(data, event)=>{
    for(var i = 0; i < startEvents.length; i++) {
        if(startEvents[i].title == data.foo) {
            setEvents([...events,startEvents[i]])
            // removing from start events 
            startEvents.splice(i, 1)
        }
    }
    

  
    }

    const handleRemoveEvent=(title)=>{
       
        for(var i = 0; i < events.length; i++) {
            if(events[i].title === title.title) {
                setStartevents([...startEvents,events[i]])
                if(events.length===1){
                    setEvents([]);
                }
                else{
                    
                    events.splice(i, 1)
              
               setRender(!render)
                }
                break;
            }
        }
        
    }

  
    return (
        <div id="mainContainer">
            <div id="rightSided">
                <MainCard id="mainCard">
                    <div id="titleContainer">
                        <MainCard id="title">{'sessions'}</MainCard>
                        <MainCard id="PlusBtn">{'+'}</MainCard>
                    </div>
                    <Divider/>
                    <div></div>                    
                </MainCard>
                <MainCard id="mainCard">
                    <div id="titleContainer">
                        <MainCard id="title">{'Pacakges'}</MainCard>
                        <MainCard id="PlusBtn">{'+'}</MainCard>
                    </div>
                    <Divider/>
                    <div>
                    {startEvents.map((value,index)=>{

                     return <Draggable type="foo" data={value.title}>
                        <div>
                         <div>{value.start.toDateString()}</div>
                         <div>{value.end.toDateString()}</div>
                        <div>{value.title}</div>
                        </div>
                     </Draggable>
                    })}
        
                     
                       
                     
                    </div> 
                </MainCard>
            </div>
            <div id="leftSided">
              <Droppable types={['foo']} onDrop={handleDrop}>
              <MyCalendar
                eventsDrag={events}
                handleRemoveEvent={handleRemoveEvent}
              />
              </Droppable>
            </div>
        </div>
    );
};

export default CalenderEvents;
