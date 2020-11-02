import React, { Fragment } from "react";
import Event from "./Event";

export default function EventList(props) {
  const events = props.events.map((event) => {


    return (
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
    );
  });

  return <section>{events}</section>;
}
