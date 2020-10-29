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
    <>
     
      <section className="patron-page-flex-col">
      <section><NavigationBar /></section>
        <div className="continerforbackgroundcolor">
        <section className="patron-page-flex-row">
           
            <section className="patron-page-flex-col">
              <SearchBar addFav={props.addFav} removeFav={props.removeFav}/>
              {/* <EventList events={state.events} teams={state.teams} /> */}
              <Map />  
            </section>
            </section>
            </div>
            </section>
        
    </>
  );
}