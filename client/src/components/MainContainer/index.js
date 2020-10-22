import React from 'react';
import './index.scss';
import VenueDescription from './VenueDescription';
import Info from './Info';
import BussniessHours from './BussniessHours';
import Photos from './Photos';
import Address from './Address';

export default function MainContainer(props) {
  return (
    <div class="continerforbackgroundcolor">
      <div class="row1 mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <VenueDescription venueDescription={props.venueDescription}/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Info venueCapacity={props.venueCapacity}/>
          </div>
        </div>
      </div>

      <div class="row1 mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <BussniessHours />
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Photos />
          </div>
        </div>
      </div>
      <div class="row1 mb-1">
        <div class="col-md-12">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Address />
          </div>
        </div>
      </div>

    </div>);
}