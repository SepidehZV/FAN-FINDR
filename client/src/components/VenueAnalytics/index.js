import React, { useContext } from 'react';
import './index.scss';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import StateContext from '../../StateContext';

import NumberOfFavouritesForDay from './NumberOfFavouritesForDay';
import NumberOfFavouritesForEvent from './NumberOfFavouritesForEvent';

const VenueAnalytics = (props) => {
  const state = useContext(StateContext);
  return (
    
      <div>

        <section><CoverPhoto /></section>
        <div className="conrinerforflex">
          <section><Sidebar /></section>
          <NumberOfFavouritesForDay venue_id={props.venue_id} />
          <NumberOfFavouritesForEvent events={state.events} event_id ={2}/>
        </div>
      </div>

    
  );
};

export default VenueAnalytics;