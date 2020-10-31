import React ,{useContext}from 'react';
import StateContext from '../../StateContext';



export default function VenueDescription(props) {
  const state = useContext(StateContext);
  

  return (

    <div className="conrinerforPadding">

      <div class="col">
        <section>
          {props.venue_name}
        <hr className="seprating" />
        </section>
        <section>

          {props.venue_description}
        </section>
      </div>
    </div>

  );
}