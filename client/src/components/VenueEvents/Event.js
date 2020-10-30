import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


export default function Event(props) {

  


  return (
    <div className="card" >
      <img src={props.team_logo_url} alt="team logo" class="avatar" />
      <div className="sport_name">
        <h1 className="sport-title">{props.event_name || 'event name'}</h1>
        <h5 className="time-title">{props.start_date}</h5>
      </div>
      <img className="card-img-top" src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} alt="Card image cap" />
      <div className="card-body">
        <div className="edit-and-delete" >
          <div><h5 className="card-title">{props.team_name || 'team name'}</h5> </div>
          

        </div>
        <hr className="seprating" />

        <p className="card-text">{props.event_description}</p>

      </div>
      <table class="table">
        <tr>
          <th >hosted by</th>
          <th >{props.venue_name || 'venue name'}</th>
        </tr>

        <th >offer</th>
        <th >{props.offers || 'offers'}</th>

      </table>
    </div>
  )
}