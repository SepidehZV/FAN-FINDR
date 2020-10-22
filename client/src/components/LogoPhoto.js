import React from 'react';
import './LogoPhoto.scss';
export default function LogoPhoto(porps){
  return(
    <img className="logoImg"
      src= {porps.logo_url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}/>
  );
};