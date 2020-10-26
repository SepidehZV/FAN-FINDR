import React, { useContext } from 'react';
import './index.scss';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';

import NumberOfFavouritesForDay from './NumberOfFavouritesForDay';
import NumberOfFavouritesForEvent from './NumberOfFavouritesForEvent';

//////////mock venue
// const mockVenue = {
//   "id": 1,
//   "owner_id": 1,
//   "venue_name": "Sens House",
//   "street": "73 York St",
//   "country": "Canada",
//   "venue_zip_code": "K1N 5T2",
//   "province": "Ontario",
//   "venue_description": "this is a description",
//   "phone": "(613) 241-5434",
//   "capacity": 50,
//   "age_restriction": 18,
//   "dress_code": "casual",
//   "venue_logo_url": "",
//   "category_id": 1,
//   "cover_url": "",
//   "city": "Ottawa",
//   "first_name": "Mario",
//   "last_name": "Bros",
//   "username": "MariB",
//   "email": "mario@nintendo.com",
//   "user_zip_code": "",
//   "avatar_url": "https://i.imgur.com/LpaY82x.png",
//   "user_type": true,
//   "password": "password"
// }
const VenueAnalytics = (props) => {
  const state = useContext(StateContext);
  // console.log("events from state",state.events)
  const eventsForVenue = state.events.filter((ev) => ev.venue_id === state.venue_id);
  // const eventList = eventsForVenue.map()

  // console.log("eventsForVenue",eventsForVenue);   
  return (

    <div>
      <section > <NavigationBar/></section>
      <section><CoverPhoto /></section>
      <div className="conrinerforflex">
        <section><Sidebar /></section>
      
        <div className ="line-fo-resizing">
        <div className="card" >
          <NumberOfFavouritesForDay venue_id={state.venue_id} />
          <NumberOfFavouritesForEvent events={eventsForVenue} />
        </div>
        </div>
        
      </div>
    </div>


  );
};

export default VenueAnalytics;