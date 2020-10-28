import React from 'react';
import './index.scss';


import CoverPhoto from '../CoverPohto';
import NavigationBar from '../NavigationBar';
import Info from './Info';

export default function VenueEvents(props) {

  return (
    <div>
      <NavigationBar />
      <CoverPhoto />
      <Info venueCapacity={props.venueCapacity}/>
          
    </div>
)
}