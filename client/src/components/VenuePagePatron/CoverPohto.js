import React, {useContext} from "react";
import './CoverPhoto.scss';
import LogoPhoto from './LogoPhoto';
import StateContext from '../../StateContext';

export default function CoverPhoto(props){
  const state = useContext(StateContext);

  return (
    <div>
    <LogoPhoto logo_url={props.venue_logo_url}/>
    
    
    <img src={props.cover_url || "https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-21-at-3.58.19-PM.png"} className="coverphoto" alt="Responsive image"/>
    
  </div>

  )
} 
  
