import React ,{useContext}from 'react';
import StateContext from '../../StateContext';



export default function VenueDescription(props) {
  const state = useContext(StateContext);
  

  return (

    <div className="conrinerforPadding">

      <div class="col">
        <h3>
          {props.venue_name}
        </h3>
        <hr className="seprating" />

        <p className="description-venue">

          {props.venue_description}
        </p>
      </div>
    </div>

  );
}