import React from "react";
import './CoverPhoto.scss';

export default function CoverPhoto(porps){
  return (
    <img src={porps.cover || "https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-21-at-3.58.19-PM.png"} className="coverphoto" alt="Responsive image"/>
  )
} 
