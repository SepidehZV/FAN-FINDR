import React, { Fragment } from 'react';
import Event from './Event';

export default function EventList(props) {
  const teams = props.teams;
  const events = props.events.map(event => {
    // const venueName = getVenuName(props.events);
    console.log(event.event_name);
  
    
    return(<Event 
      key={event.id} 
      eventName={event.event_name} 
      description={event.event_description}
      teamName={event.team_name} 
      venueName= {event.venue_name}
      offer={event.offers}
      teamUlogoUrl={event.team_logo_url}
      startDate ={event.start_date}
      />)
    
    

  })


  return (
    <section>
      {events}
    </section>
  )
  
}