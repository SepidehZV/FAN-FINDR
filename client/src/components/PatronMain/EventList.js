import React, { Fragment } from 'react';
import Event from './Event';

export default function EventList(props) {
  const events = props.events.map(event => {
    // const venueName = getVenuName(props.events);
    // console.log(event.event_name);
  
    
    return(<Event 
      key={event.id} 
      event_name={event.event_name} 
      event_description={event.event_description}
      team_name={event.team_name} 
      venue_name= {event.venue_name}
      offers={event.offers}
      eam_logo_url={event.team_logo_url}
      start_date ={event.start_date}
      />)
    
    

  })


  return (
    <section>
      {events}
    </section>
  )
  
}