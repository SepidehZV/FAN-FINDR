import React, { useContext } from 'react';
import StateContext from '../StateContext';

export default function LogoPhoto() {
  const state = useContext(StateContext);
  
  const avatar_Img = state.user.avatar_url;
  return (
    <div>
      {state.user.user_type && !state.venue.venue_logo_url && <img className="logoImg"
        src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.03.09-AM.png"
      />}

      {state.user.user_type && state.venue.venue_logo_url && <img className="logoImg"
        src={state.venue.venue_logo_url}
      />}
      
      {!state.user.user_type && !avatar_Img && <img className="logoImg"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      />}
      {!state.user.user_type && avatar_Img && <img className="logoImg"
        src={avatar_Img}
      />}

    </div>
  );
};