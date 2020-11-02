import React, { useContext } from "react";
import Event from "./Event";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Sidebar from "../Sidebar";
import CoverPhoto from "../CoverPohto";
import NavigationBar from "../NavigationBar";
import StateContext from "../../StateContext";
import SetStateContext from "../../SetStateContext";
import axios from "axios";
import './index.scss';

export default function VenueEvents(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const { mode, transition, back } = useVisualMode( SHOW);

  const state = useContext(StateContext);
  const setState = useContext(SetStateContext);
  // useEffect(() => {
  //   if (!alert) {
  //     return;
  //   }
  //   document.querySelector('html').scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }, [alert]);

  const deleteEvent = (eventId) => {
    return axios.delete(
      `http://localhost:3001/api/venues/${state.venue.id}/event/${eventId}`
    )
      .then((res) => {
        console.log("res.data for deleteEvent", res.data);
        const tempEvents = state.events.filter((e) => e.id !== eventId);
        setState((prev) => ({ ...prev, events: tempEvents }));
        transition(SHOW);
      })
      .catch((err) => console.log(err));
  };


  const updatEvent = (
    event_name,
    event_description,
    offers,
    team_id,
    venue_id,
    eventId
  ) => {
    const updated = {
      event_name,
      event_description,
      offers,
      team_id,
      venue_id,
      eventId
    };
    const tempEvents = [...state.events];
 return
   axios.put(`http://localhost:3001/api/venues/${venue_id}/event/${eventId}`, {
      event_name,
      event_description,
      offers,
      team_id,
    })
      .then((res) => {
        const index = tempEvents.findIndex((i) => i.id === updated.id);
        tempEvents[index] = updated;
        setState((prev) => ({ ...prev, events: tempEvents }));
        transition(SHOW);
      })
      .catch((err) => console.log(err));
  };

  const addEvent = (
    event_name,
    event_description,
    offers,
    team_id,
    venue_id,
    eventId
  ) => {
    const newEvent = {
      event_name,
      event_description,
      offers,
      team_id,
      venue_id,
      eventId
    };
    const tempEvents = [...state.events];
    const newEventList = [...state.events, tempEvents];
    return axios.post(`http://localhost:3001/api/venues/${venue_id}/event`, {
      event_name,
      event_description,
      offers,
      team_id,
      venue_id,
    })
      .then((res) => {
        setState((prev) => ({ ...prev, events: newEventList  }));
      })
      .catch((err) => console.log(err));
  };

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
          sport_name={event.sport_name}
          venue_id = {state.venue.id}
          deleteEvent={deleteEvent}
          updatEvent={updatEvent}
          addEvent={addEvent}
        />
      );
    }
  });
  return (
      <div>
      <section><NavigationBar /></section>

        <section><CoverPhoto /></section>

        <div className="conrinerforflex">
        <section><Sidebar /></section>

          <div className ="line-fo-resizing">
          {events}
          {mode === SHOW && <button className="btn btn-lg  btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" onClick={() => transition(CREATE)}>Add New Game</button>}

       
          {mode === CREATE &&
       <Form 
       key={null}
       id={null}
       event_description={null}
       team_name={null}
       event_name= {null}
       venue_name= {null}
       offers={null}
       team_logo_url={null}
       start_date={null}
       sport_name={null}
       onSave = {addEvent}
       venue_id= {state.venue.id}
       onCancel={() => back()} 
       mode={"CREATE"} 
       transition={transition}/>}
       </div>
      </div></div>        

      
  );
}
