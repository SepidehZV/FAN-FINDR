import React, {useContext} from "react";
import './CoverPhoto.scss';
import LogoPhoto from './LogoPhoto';
import StateContext from '../StateContext';

export default function CoverPhoto(porps){
  const state = useContext(StateContext);

  return (



<div className="relative">{state.user_type && !state.venue.cover_url && <img src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-21-at-3.58.19-PM.png"} className="coverphoto" alt="Responsive image"/>}
    {state.user_type && state.venue.cover_url && <img src={state.venue.cover_url} className="coverphoto" alt="Responsive image"/>}
    {/* {!state.user_type && props.cover_url && <img src={props.cover_url} className="coverphoto" alt="Responsive image"/>} */}
    {!state.user_type && <img src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-28-at-2.38.38-PM-1024x245.png"} className="coverphoto" alt="Responsive image"/>}
    
  <div className="absolute"><LogoPhoto/></div>
</div>

  )
} 
  
