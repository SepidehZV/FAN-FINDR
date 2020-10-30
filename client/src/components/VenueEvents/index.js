import React from 'react';

import Empty from '../Empty';
import Confirm from '../Confirm';
import Form from './Form';
import Sidebar from '../Sidebar';
import CoverPhoto from '../CoverPohto';
import NavigationBar from '../NavigationBar';

export default function VenueEvents(props) {

  return (
  <div>
    <NavigationBar />
    <CoverPhoto />
      <Sidebar />
       <Form /> 
    
    </div>
   
  );
}