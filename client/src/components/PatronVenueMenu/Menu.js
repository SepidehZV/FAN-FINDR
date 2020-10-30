import React, { useContext, useState, useEffect } from 'react';
import Show from './Show';
import Empty from '../Empty';
import Form from './Form';
import Confirm from './Confirm';
import useVisualMode from "../../hooks/useVisualMode";

export default function Menu(props) {
  


  return (
    <>
        
          <Show
            id={props.id}
            item_name={props.item_name}
            item_description={props.item_description}
            price={props.price}
            venue_id = {props.venue_id}
            
          />
      

    </>
  )
  }       