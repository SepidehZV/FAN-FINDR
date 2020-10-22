import React from 'react';



export default function VenueDescription(props) {
  return (

    <div className="conrinerforPadding">
      <div class="col">
        <section>
          Venue description
        <hr className="seprating" />
        </section>
        <section>
          {props.venueDescription || `enjoy your meal wihle  whatching you faveouvirt team playing live. 
the events will be showing here. dont miss our spical events and our imazing deals. 
we are wating to see here.
bring you frinds `}
        </section>
      </div>
    </div>

  );
}