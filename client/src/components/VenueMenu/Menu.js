import React, { useContext, useState, useEffect } from 'react';
import Show from './Show';
import Empty from '../Empty';
import Form from './Form';
import Confirm from './Confirm';
import useVisualMode from "../../hooks/useVisualMode";

export default function Menu(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(SHOW);


  return (
    <>
        {mode === SHOW && (
          <Show
            id={props.id}
            item_name={props.item_name}
            item_description={props.item_description}
            price={props.price}
            venue_id = {props.venue_id}
            deleteMenu= {() => transition(CONFIRM)}
            onEdit={() => transition(EDIT)}
          />
        )}
        {mode === CREATE && <Form item_name={props.item_name}
            item_description={props.item_description}
            price={props.price}
          onSave={ props.addMenuItem } onCancel={() => back()} mode ={"CREATE"}/>}
        
        
        {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete?"}
          id={props.id}
          onCancel={() => back()}
          onConfirm={props.deleteMenu}
        />}
        {mode === EDIT && <Form item_name={props.item_name}
            item_description={props.item_description}
            price={props.price}
          onUpdate={ props.updateMenu } onCancel={() => back()} mode ={"EDIT"}/>}
      
      

    </>
  )
  }       