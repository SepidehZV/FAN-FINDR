import React, { useContext, useState} from 'react';
import Status from './Status';
import Error from './Error';
import axios from 'axios';
import './index.scss';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import MainContainer from './MainContainer';
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';
import useVisualMode from "../../hooks/useVisualMode";
import FormVenue from './FormVenue';

const SHOW = "SHOW";
const EDIT = "EDIT";
const SAVING = "SAVING";
const ERROR_SAVE = "ERROR_SAVE";

export default function VenuePage(props) {
  const state = useContext(StateContext);
  const { mode, transition, back } = useVisualMode(SHOW);

  function save (id,venue_name,
    street, country,  venue_zip_code , province ,
    venue_description , phone,venue_email, capacity,
    age_restriction, dress_code , categorie_name,city,venueObj, state) {

    transition(SAVING);
    props.editVenuePage(id,venue_name,
      street, country,  venue_zip_code, province ,
      venue_description , phone,venue_email, capacity,
      age_restriction, dress_code , categorie_name,city,venueObj, state)
      .then(() => transition(SHOW))
  
  }



  return (
    <div>
      <main className="layout">
        <div>
          <section><NavigationBar /></section>
          <section><CoverPhoto /></section>
          <div className="conrinerforflex">
            <section><Sidebar /></section>
            {mode === EDIT && <FormVenue onSave={ save } onCancel={() => back()}/>}

            {mode === SHOW &&<MainContainer
              venue={state.venue}
              photos={state.venuePhotos}
              hours={state.venueHours}
              onEdit={() => transition(EDIT)} />}

            {mode === SAVING && <Status message='Saving'/>}
            {mode === ERROR_SAVE && <Error message={"Could not save the changes"} onClose={() => back()} />}
            
          </div>

        </div>
      </main>

    </div>
  );



}
