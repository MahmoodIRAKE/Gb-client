

import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";


import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class MyCalendar extends Component {


  state = {
    events: {}
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    const {eventsDrag,handleRemoveEvent}=this.props;
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={eventsDrag}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
          onDoubleClickEvent={(event)=>{handleRemoveEvent(event)}}
        />
      </div>
    );
  }
}

export default MyCalendar ;



// export const  events= [
//     {
//       'title': 'All Day Event very long title',
//       'allDay': true,
//       'start': new Date(2023, 3, 0),
//       'end': new Date(2023, 3, 1)
//     },
//     {
//       'title': 'Long Event',
//       'start': new Date(2015, 3, 7),
//       'end': new Date(2015, 3, 10)
//     },
  
//     {
//       'title': 'DTS STARTS',
//       'start': new Date(2016, 2, 13, 0, 0, 0),
//       'end': new Date(2016, 2, 20, 0, 0, 0)
//     },
  
//     {
//       'title': 'DTS ENDS',
//       'start': new Date(2016, 10, 6, 0, 0, 0),
//       'end': new Date(2016, 10, 13, 0, 0, 0)
//     },
  
//     {
//       'title': 'Some Event',
//       'start': new Date(2015, 3, 9, 0, 0, 0),
//       'end': new Date(2015, 3, 9, 0, 0, 0)
//     },
//     {
//       'title': 'Conference',
//       'start': new Date(2015, 3, 11),
//       'end': new Date(2015, 3, 13),
//       desc: 'Big conference for important people'
//     },
//     {
//       'title': 'Meeting',
//       'start': new Date(2015, 3, 12, 10, 30, 0, 0),
//       'end': new Date(2015, 3, 12, 12, 30, 0, 0),
//       desc: 'Pre-meeting meeting, to prepare for the meeting'
//     },
//     {
//       'title': 'Lunch',
//       'start': new Date(2015, 3, 12, 12, 0, 0, 0),
//       'end': new Date(2015, 3, 12, 13, 0, 0, 0),
//       desc: 'Power lunch'
//     },
//     {
//       'title': 'Meeting',
//       'start': new Date(2015, 3, 12, 14, 0, 0, 0),
//       'end': new Date(2015, 3, 12, 15, 0, 0, 0)
//     },
//     {
//       'title': 'Happy Hour',
//       'start': new Date(2015, 3, 12, 17, 0, 0, 0),
//       'end': new Date(2015, 3, 12, 17, 30, 0, 0),
//       desc: 'Most important meal of the day'
//     },
//     {
//       'title': 'Dinner',
//       'start': new Date(2015, 3, 12, 20, 0, 0, 0),
//       'end': new Date(2015, 3, 12, 21, 0, 0, 0)
//     },
//     {
//       'title': 'Birthday Party',
//       'start': new Date(2015, 3, 13, 7, 0, 0),
//       'end': new Date(2015, 3, 13, 10, 30, 0)
//     },
//     {
//       'title': 'Birthday Party 2',
//       'start': new Date(2015, 3, 13, 7, 0, 0),
//       'end': new Date(2015, 3, 13, 10, 30, 0)
//     },
//     {
//       'title': 'Birthday Party 3',
//       'start': new Date(2015, 3, 13, 7, 0, 0),
//       'end': new Date(2015, 3, 13, 10, 30, 0)
//     },
//     {
//       'title': 'Late Night Event',
//       'start': new Date(2015, 3, 17, 19, 30, 0),
//       'end': new Date(2015, 3, 18, 2, 0, 0)
//     },
//     {
//       'title': 'Multi-day Event',
//       'start': new Date(2015, 3, 20, 19, 30, 0),
//       'end': new Date(2015, 3, 22, 2, 0, 0)
//     }
//   ]
  