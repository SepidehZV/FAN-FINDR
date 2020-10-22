import React from 'react';
import { GoogleMap } from 'react-google-maps';
export const Map = () => {
  return(
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter = {{ lat : 45.421532, lng: -75.697189}}
    />
  ); 
}


