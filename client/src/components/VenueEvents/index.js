import React, { useContext } from "react";
import Event from "./Event";

import Form from "./Form";
import Sidebar from "../Sidebar";
import CoverPhoto from "../CoverPohto";
import NavigationBar from "../NavigationBar";
import StateContext from "../../StateContext";
import SetStateContext from "../../SetStateContext";
import Axios from "axios";

export default function VenueEvents(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const state = useContext(StateContext);
  const setState = useContext(SetStateContext);
  const delteEvent = (eventId) => {
    Axios.delete(
      `http://localhost:3001/api/venues/${state.venue.id}/event/${eventId}`
    )
      .then((res) => {
        console.log("res.data for deleteevent", res.data);
        const tempEvents = state.events.filter((e) => e.id !== eventId);
        setState((prev) => ({ ...prev, events: tempEvents }));
      })
      .catch((err) => console.log(err));
  };
  // const updatEvent = (id,event_id) =>{

  //   Axios.put (`http://localhost:3001/api/events/${id}/${event_id}`)
  //     .then(res => {
  //       const tempEvents = state.events.filter((e)=>e.id !==id )
  //       setState(prev => ({...prev,events:tempEvents }))
  //     })
  //     .catch(err => console.log(err))
  //   }

  const events = state.events.map((event) => {
    if (event.venue_id === state.venue.id) {
      return (
        <Event
          key={event.id}
          id={event.id}
          event_description={event.event_description}
          team_name={event.team_name}
          event_name={event.event_name}
          venue_name={event.venue_name}
          offers={event.offers}
          team_logo_url={event.team_logo_url}
          start_date={event.start_date}
          deleteEvent={delteEvent}
        />
      );
    }
  });
  return (
    <main className="layout">
      <div>
        <section>
          <NavigationBar />
        </section>
        <section>
          <CoverPhoto />
        </section>
        <div className="conrinerforflex">
          <Sidebar />
          {events}
        </div>
      </div>
    </main>
  );
}
