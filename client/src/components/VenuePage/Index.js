import React ,{useContext}from 'react';
import './index.scss';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import MainContainer from './MainContainer';
import VenueAnalytics from '../VenueAnalytics'
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';

export default function VenuePage(props) {
  const state = useContext(StateContext);
  console.log(state);
  return(
    <main className="layout">
      <div>
        <section><NavigationBar /></section>
        <section><CoverPhoto /></section>
        <div className="conrinerforflex">
          <section><Sidebar /></section>
          
          <MainContainer state={state}/>
        </div>
        
        </div>
        </main>
  );
}
