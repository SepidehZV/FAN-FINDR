import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import SetStateContext from '../SetStateContext';
import './NavigationBar.scss';
import StateContext from '../StateContext';
 function NavigationBar(props) {// we will need a props to use props.username for the greeting and the props.avatar_url
  const setState = useContext(SetStateContext);
  const history = useHistory();
  const state = useContext(StateContext);
  const logout = () => {
    
    localStorage.clear();
    history.push('/login');
    setState(prev => ({...prev , user:{}, user_type:null}))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    
    <a className="navbar-brand" href="#"><Link to='/'><img src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-21-at-11.53.17-AM.png" className="logo"/></Link></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="avatarProfile">Hello! {state.user.username || "geust"}.
        <div className="dropdown mr-4">
          <li className="btn " id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
            {!state.user_type && !state.user.avatar_url && <img className="avatarImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" loading="lazy" />}
            {!state.user_type && state.user.avatar_url && <img className="avatarImg" src={state.user.avatar_url} alt="" loading="lazy" />}
            {state.user_type && !state.venue.venue_logo_url && <img className="avatarImg" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.03.09-AM.png" alt="" loading="lazy" />}
            {state.user_type && state.venue.venue_logo_url && <img className="avatarImg" src={state.venue.venue_logo_url} alt="" loading="lazy" />}
          </li>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
            <li className="dropdown-item" ><Link to='/profile' className="navLink">Profile</Link></li>
            <li className="dropdown-item" ><Link to='/favourites' className="navLink">My favourites</Link></li>
            <li className="dropdown-item" onClick={logout}><hr/> Logout</li>
            </div>
      </div>
        
  
          
        </li>
      </ul>

    </div>
 

</nav>
  );
}
export default NavigationBar;