import React, {useContext}from 'react';
import Event from './Event';

import Form from './Form';
import Sidebar from '../Sidebar';
import CoverPhoto from '../CoverPohto';
import NavigationBar from '../NavigationBar';
import StateContext from '../../StateContext';

export default function VenueEvents(props) {
  const state = useContext(StateContext);
  if (state.user_type) {
    const events = state.events.map(event => {
      if (event.venue_id === state.venue.id) {
        return (
          <Event
            key={event.id}
            id={event.id}
            event_description={event.event_description}
            team_name={event.team_name}
            event_name= {event.event_name}
            venue_name= {event.venue_name}
            offers={event.offers}
            team_logo_url={event.team_logo_url}
            start_date={event.start_date}
             />
        )
      }

    }
    )
    return (
      <main className="layout">
        <div>
          <section><NavigationBar /></section>
          <section><CoverPhoto /></section>
          <div className="conrinerforflex">

            <Sidebar />
            {events}


          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="layout">
        <div>
          <section><NavigationBar /></section>
          <section><CoverPhoto /></section>
          <div className="conrinerforflex">

            <Sidebar />
            {/* <EventList /> */}

            {/* <Confirm />  */}

            {/* <Empty /> */}
            {/* <Form /> */}

          </div>
        </div>
      </main>
    );
  }
}