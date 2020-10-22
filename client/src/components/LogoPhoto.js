import React from 'react';
import './LogoPhoto.scss';
export default function LogoPhoto(porps){
  return(
    <img className="logoImg"
      src= {porps.logo_url || "https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.03.09-AM.png"}/>
  );
};