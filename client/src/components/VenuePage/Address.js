import React from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';
import Map from '../Map';
import './index.scss';

export default function Address(props) {
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  return (
    <div className="conrinerforPadding">
      <div class="col">
        <div> Address </div>
        <hr className="seprating" />
        {props.street || 'street'}, {props.city || 'city'},{props.province || 'province'}, {props.country || 'country'}, {props.venue_zip_code || 'zip_code'}
      </div>
      <Map />

    </div>
  );
}
