import React ,{useContext}from 'react';
import StateContext from '../../StateContext';



export default function VenueDescription(props) {
  const state = useContext(StateContext);
  const venue = state.venues.map(e => e.id === state.venue.id)

  return (

    <div className="conrinerforPadding">
      <div class="col">
        <section>
          {venue.name }
        <hr className="seprating" />
        </section>
        <section>
          {/* { venue.d|| } */}
        </section>
      </div>
    </div>

  );
}