import React from "react";
import './CoverPhoto.scss';
import LogoPhoto from './LogoPhoto';

export default function CoverPhoto(porps){
  return (
    <div>
    <LogoPhoto logo_url ={ porps.logo_url}/>
    <img src={porps.cover_photo_url || "https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-21-at-3.58.19-PM.png"} className="coverphoto" alt="Responsive image"/>
  </div>
  )
} 
