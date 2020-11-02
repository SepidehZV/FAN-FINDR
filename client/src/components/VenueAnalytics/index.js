import React, { useContext } from 'react';
import './index.scss';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';

import NumberOfFavouritesForDay from './NumberOfFavouritesForDay';
import NumberOfFavouritesForEvent from './NumberOfFavouritesForEvent';

const VenueAnalytics = (props) => {
  const state = useContext(StateContext);
  const venueForUser = state.venues.find(ven => ven.owner_id === state.user.id)
  const eventsForVenue = state.events.filter((ev) => ev.venue_id === venueForUser.id);

  return (

    <div>
      <section > <NavigationBar/></section>
      <section><CoverPhoto /></section>
      <div className="conrinerforflex">
        <section><Sidebar /></section>
      
        <div className ="line-fo-resizing">
          <NumberOfFavouritesForDay venue_id={venueForUser.id} />
          <NumberOfFavouritesForEvent events={eventsForVenue} />
        </div>
        </div>
        
      </div>
    


  );
};

export default VenueAnalytics;