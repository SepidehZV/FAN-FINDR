import React from 'react';
import MenuList from './MenuList';
import './index.scss';
import NavigationBar from '../NavigationBar';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';

export default function VenueMenu(props) {
  return (
    <main className="layout">
      <div>
        <section><NavigationBar /></section>
        <section><CoverPhoto /></section>
        <div className="conrinerforflex">

          <Sidebar />
          <div className ="venueMenu-flex-col">
          <MenuList />
          </div>
          
        </div>
      </div>
    </main>
  );
}