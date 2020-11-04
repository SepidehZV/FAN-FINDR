import React, { useContext } from 'react';

import './index.scss';
import Event from './Event';
import SearchBar from './SearchBar';
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';
import Map from './Map'

export default function PatronMain(props) {
  const state = useContext(StateContext);
  const eventList = state.events.map(event => (
    <Event
        key={event.id}
        id={event.id}
        venue_id={event.venue_id}
        event_description={event.event_description}
        event_name={event.event_name}
        venue_name={event.venue_name}
        team_name={event.team_name}
        offers={event.offers}
        venue_logo_url={event.venue_logo_url}
        start_date={event.start_date}
        addFav={props.addFav}
        removeFav={props.removeFav}
        sport_name={event.sport_name}
      />
  ))
  return (
    <div>
     
    <NavigationBar />
    <SearchBar addFav={props.addFav} removeFav={props.removeFav}/>
    {/* <EventList events={state.events} teams={state.teams} /> */}
    <main role="main" className="container">
    {/* {eventList} */}
{/* <div className="mapimg"> <Map />  </div> */}
    
         </main>
  </div>
  );
}