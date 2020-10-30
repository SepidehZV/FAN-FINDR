import React, { useContext } from 'react';
import './LogoPhoto.scss';
import StateContext from '../../StateContext';

export default function LogoPhoto(props) {
  
  
  
  return (
    <div>
      
      
      { !props.logo_url && <img className="logoImg"
        src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.03.09-AM.png"
      />}
      {props.logo_url&&  <img className="logoImg"
        src={props.logo_url}
      />}

    </div>
  );
};