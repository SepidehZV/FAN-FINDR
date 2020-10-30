import React from 'react';
import MenuList from './MenuList';
import './index.scss';
import NavigationBar from '../NavigationBar';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';

export default function VenueMenu(props) {
  return (
    <div>
        <NavigationBar />
        <CoverPhoto />

          <Sidebar />
          <MenuList />
    </div>
          
       
  );
}