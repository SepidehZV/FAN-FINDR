import React, {useState, useContext} from 'react';
import StateContext from '../../StateContext';
import './index.scss';

import useVisualMode from "../../hooks/useVisualMode";

import CoverPhoto from '../CoverPohto';
import NavigationBar from '../NavigationBar';
import PatronInfo from './PatronInfo';
import Form from './Form';
import Status from './Status';
import Error from './Error';
import Avatar from './Avatar';
const SHOW = "SHOW";
const EDIT = "EDIT";
const SAVING = "SAVING";
const ERROR_SAVE = "ERROR_SAVE";
const AVATAR ="AVATAR";

export default function PatronProfile(props) {
  
  const state = useContext(StateContext);
  const { mode, transition, back } = useVisualMode(
    SHOW
  );


  function save (id,first_name, last_name, username, email, user_zip_code, userObj) {

    transition(SAVING);
    props.editPatronProfile(id, first_name,last_name, username, email, user_zip_code, userObj)
      .then(() => transition(SHOW))

       
  }

  function saveAvatar (avatar_url,state) {
    transition(SAVING);
    props.editPatronAvatar(avatar_url,state)
      .then(() => transition(SHOW))
  }

  

  return (
    <div>
      <NavigationBar />
      <CoverPhoto  />
      
      {mode === SHOW && <PatronInfo onEdit={() => transition(EDIT)} onEditAvatar={() => transition(AVATAR)}/>}
      {mode === SAVING && <Status message='Saving'/>}
      {mode === EDIT && <Form onSave={ save } onCancel={() => back()}/>}
      {mode === ERROR_SAVE && <Error message={"Could not save the changes"} onClose={() => back()} />}
      {mode === AVATAR && <Avatar saveAvatar={saveAvatar} onCancel={() => back()}/>}
    </div>

    
)
}