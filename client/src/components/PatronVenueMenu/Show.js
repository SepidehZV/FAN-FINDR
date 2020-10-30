import React from 'react'

export default function Show(props) {

  return (
    <div className="row1">
      <div className="card" >
        <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap" />
        <div className="card-body">
          <div className="sport_name">
            <h1 className="sport-title">{props.item_name || "Menu-item"}</h1>
            <h5 className="time-title">{props.price}</h5>
          </div>
        </div>
        <div></div>
        <div className="card-body">
          <div className="edit-and-delete" >
            <p className="card-text">{props.item_description || 'here gose the menu description'}</p>
           
          </div>
        </div >
      </div>
    </div>
  );
}
