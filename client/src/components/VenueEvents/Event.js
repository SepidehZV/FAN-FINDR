import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import useVisualMode from "../../hooks/useVisualMode";
import Show from './Show';
import Form from './Form';
import Confirm from './Confirm';

export default function Event(props) {
const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(props.mode || SHOW);

  return (
    <>
      {mode === SHOW && (
        <Show
        key={props.id}
        id={props.id}
        event_description={props.event_description}
        team_name={props.team_name}
        event_name= {props.event_name}
        venue_name= {props.venue_name}
        offers={props.offers}
        team_logo_url={props.team_logo_url}
        start_date={props.start_date}
        sport_name={props.sport_name}
        deleteEvent={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE &&
       <Form 
       key={props.id}
       id={props.id}
       event_description={props.event_description}
       team_name={props.team_name}
       event_name= {props.event_name}
       venue_name= {props.venue_name}
       offers={props.offers}
       team_logo_url={props.team_logo_url}
       start_date={props.start_date}
       sport_name={props.sport_name}
       onSave = {props.addEvent}
       venue_id= {props.venue_id}
       onCancel={() => back()} 
       mode={"CREATE"} />}


      {mode === CONFIRM &&
        <Confirm message={"Are you sure you would like to delete?"}
          id={props.id}
          onCancel={() => back()}
          onConfirm={props.deleteEvent}
        />}

      {mode === EDIT &&
        <Form 
        key={props.id}
        id={props.id}
        event_description={props.event_description}
        team_name={props.team_name}
        event_name= {props.event_name}
        venue_name= {props.venue_name}
        offers={props.offers}
        team_logo_url={props.team_logo_url}
        start_date={props.start_date}
        sport_name={props.sport_name}
        venue_id ={props.venue_id}
        onSave ={props.updatEvent}
        onCancel={() => back()} 
        transition={transition}
         />}



    </>
  )
}       