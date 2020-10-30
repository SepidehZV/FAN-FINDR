import React, { useState } from 'react';

export default function Status(props) {

  return (
    <div className="row1">
      <div className="card" >
      <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap" />
      <div className="card-body">
        <div className="sport_name">
         
        </div>
      </div>
      <div></div>
      <div className="card-body">
        <div className="edit-and-delete" >
          <p className="card-text">props.message</p>
          
        </div>
      </div >
    </div>
  </div >

  );
}