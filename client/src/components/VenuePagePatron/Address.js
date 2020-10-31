import React from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';
import Map from '../Map';
import './index.scss';

export default function Address(props) {
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  return (
    <div className="conrinerforPadding">
      <div class="col">
        <h3> Address </h3>
        <hr className="seprating" />
        {props.address || 'street'}, {props.country || 'country'}, {props.city || 'city'},{props.province || 'province'}, {props.venue_zip_code || 'zip_code'}
      </div>
      <Map />

    </div>
  );
}
