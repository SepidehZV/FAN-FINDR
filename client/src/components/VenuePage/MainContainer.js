import React from 'react';

import VenueDescription from './VenueDescription';
import Info from './Info';
import BussniessHours from './BussniessHours';
import Photos from './Photos';
import Address from './Address';

export default function MainContainer(props) {
  //if the user_tpe
  
  return (
    <div className="continerforbackgroundcolor">
         
         <div className="row1 mb-2">
        <div className="col-md-3">
          <div className="row no-gutters  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
          <div className="conrinerPadding">

<div class="col">
  <h1 className="">Venue Profile</h1>
  <hr className="seprating" />

          </div></div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row no-gutters  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
          <div className="conrinerPadding">

<div class="col">
<h1><button type="button" className="btn btn-primary  " onClick={props.onEdit} ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>Edit</button> </h1>
          </div></div>
          </div>
        </div>
</div>




      <div className="row1 mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
           <VenueDescription venue_description={props.venue.venue_description} 
           venue_name ={props.venue.venue_name}
           />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Info capacity={props.venue.capacity}
              categorie_name={props.venue.categorie_name}
              age_restriction={props.venue.age_restriction}
              dress_code={props.venue.dress_code} 
              phone ={props.venue.phone}
              venue_email ={props.venue.venue_email}/>
          </div>
        </div>
      </div>

      <div className="row1 mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <BussniessHours hours={props.hours}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Photos photos = {props.photos}/>
          </div>
        </div>
      </div>
      <div className="row1 mb-1">
        <div className="col-md-12">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Address 
            street={props.venue.street}
            country ={props.venue.country}
            city = {props.venue.city}
            province= {props.venue.province}
            venue_zip_code= {props.venue.venue_zip_code}/>
          </div>
        </div>
      </div>

    </div>
    );
}