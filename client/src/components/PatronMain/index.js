import React, { useContext } from 'react';

import './index.scss';
import EventList from './EventList';
import SearchBar from './SearchBar';
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';
import Map from './Map'

export default function PatronMain(props) {
  const state = useContext(StateContext);
  return (
    <div>
     
    <NavigationBar />
    <SearchBar addFav={props.addFav} removeFav={props.removeFav}/>
    {/* <EventList events={state.events} teams={state.teams} /> */}
    <main role="main" class="container">

<div class="mapimg"> <Map />  </div>
    
         </main>
  </div>
  );
}