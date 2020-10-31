import React, { useContext, useState, useEffect } from 'react';
import Show from './Show';


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