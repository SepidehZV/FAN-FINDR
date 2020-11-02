import React, { useContext, useState } from 'react';
import './index.scss';
import StateContext from '../../StateContext';


function PatronInfo(props) {
  const state = useContext(StateContext);

  return (
    <>
    <button type="submit" className="btn edit-avatar " onClick={props.onEditAvatar} >Edit</button>
    <div className="container-patron">
      
    <div className="row">
    
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">My Profile</span>      <button type="submit" className="btn edit-info-btn" onClick={props.onEdit} >Edit</button>

      </h4>
      <hr className="seprating" />

      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">First name</h6>
          </div>
          <span className="text-muted">{state.user.first_name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Last Name</h6>
          </div>
  <span className="text-muted">{state.user.last_name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Username</h6>
          </div>
          <span className="text-muted">{state.user.username}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Email</h6>
          </div>
          <span className="text-muted">{state.user.email}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Zip Code</h6>
          </div>
          <span className="text-muted">{state.user.user_zip_code}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Favorite Team</h6>
          </div>
          <span className="text-muted">Toronto Maple Leafs</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Favorite Sport</h6>
          </div>
          <span className="text-muted">Football</span>
        </li>
      </ul>
      </div>

      </div>
      </div>
    </>

  )


};
export default PatronInfo;