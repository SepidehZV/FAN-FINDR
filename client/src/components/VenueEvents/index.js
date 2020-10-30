import React from 'react';

import Empty from '../Empty';
import Form from './Form';
import Sidebar from '../Sidebar';
import CoverPhoto from '../CoverPohto';
import NavigationBar from '../NavigationBar';

export default function VenueEvents(props) {

  return (
  <main className="layout">
  <div>
    <section><NavigationBar /></section>
    <section><CoverPhoto /></section>
    <div className="conrinerforflex">
    
      <Sidebar />
      {/* <EventList /> */}

      {/* <Confirm />  */}
      
      <Empty />
      {/* <Form /> */}
    
    </div>
    </div>
    </main>
  );
}