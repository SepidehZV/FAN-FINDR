import React, {useContext}from 'react';
import './index.scss';
import NavigationBar from '../NavigationBar';
import CoverPhoto from '../VenuePagePatron/CoverPohto';
import Sidebar from '../Sidebar';
import StateContext from '../../StateContext';
import Menu from './Menu';
import { useParams } from 'react-router-dom';


export default function VenueMenu(props) {

  const { id } = useParams();

  const state = useContext(StateContext);
  const venue = state.venues.find(venue => venue.id === Number(id))
  
  const menuList = state.menus.map((menu) => { 

    if (menu.venue_id === Number(id)) {
      return (
        <Menu
          key={menu.id}
          id={menu.id}
          item_name={menu.item_name}
          item_description={menu.item_description}
          price={menu.price}
          venue_id = {menu.venue_id}
          
        />
      );
    }
    
  });


  return (
    <main className="layout">
      <div>
        <section><NavigationBar /></section>
        <section>
          <CoverPhoto cover_url={venue.cover_url} 
          logo_url={venue.venue_logo_url}/>
        </section>
        <div className="conrinerforflex">

          <section><Sidebar currentVenueId={id}/></section>
          <div className ="line-fo-resizing-mune">
          {menuList}
          
          </div>
          
        </div>
      </div>
    </main>
  );
}