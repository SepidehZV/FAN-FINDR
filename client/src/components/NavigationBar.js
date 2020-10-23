import React from 'react';
import './NavigationBar.scss';

 function NavigationBar(props) {// we will need a props to use props.username for the greeting and the props.avatar_url
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    
      <a className="navbar-brand" href="#"><img src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-21-at-11.53.17-AM.png" className="logo"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="avatarProfile">Hello! {props.username || "geust"}.
          <div className="dropdown mr-4">
            <li className="btn " id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
              <img className="avatarImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" loading="lazy" />
            </li>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">My faviortes</a>
              <a className="dropdown-item" href="#"><hr/> Logout</a>
              </div>
        </div>
          
    
            
          </li>
        </ul>

      </div>
   

  </nav>
  );
}
export default NavigationBar;