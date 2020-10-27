import React from 'react';


import CoverPhoto from '../CoverPohto';
import NavigationBar from '../NavigationBar';
import Info from './Info';
import Sidebar  from '../Sidebar'

export default function VenueEvents(props) {

  return (
    <main className="layout">
      <div>
        <section className="profile-page-flex-col" >
        <section><NavigationBar /></section>
        <section><CoverPhoto /></section>
        <div className="conrinerforflex">
        <div className="sidenav1">
      <div className='container1'>

      
      </div>
    </div>
          <div class="continerforbackgroundcolor">
            <section className ="profile-page-padding">
          <div class="row1 mb-2">
       
        <div class="col-md-12">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Info venueCapacity={props.venueCapacity}/>
          </div>
        </div>
      </div>
      </section>

          </div>

        </div>
        </section>
      </div>
    </main>
  )
}