import React from 'react';
import { withGoogleMap, withScriptjs } from 'react-google-maps';
//import Map from '../Map';
import './index.scss';

export default function Address(props) {
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  return (
    <div className="conrinerforPadding">
      <div class="col">
        <div> Address </div>
        <hr className="seprating" />
        000street,zipcode 22222
      </div>
      {/* <div className="mapStyles">
        <MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        />
      </div> */}
    </div>
  );
}
