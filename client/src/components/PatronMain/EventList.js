import React, { Fragment } from 'react';
import Event from './Event';

export default function EventList(props) {
  const teams = props.teams;
  
  const events = props.events.map(event => {
    const teamName = 'hello';
    
    //console.log(event.team_id)
    for( const team in teams){
      
      if (event.team_id === team[event.team_id]) {
        console.log(team[event.team_id]);
        teamName = team[event.team_id].name;
      }
    }
    
    // if (event.team_id === teams[event.team_id]) {
    //   teamName = teams[event.team_id].name;
    // }
    return(<Event key={event.id} event={event} team={teamName}/>)
    
    

  })


  return (
    <section>
      {events}
    </section>
  )
  
}