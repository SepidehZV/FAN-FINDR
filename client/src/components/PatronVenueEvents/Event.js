import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


export default function Event(props) {

  


  return (
    <div className="event-card">

    <div className="card" >
    <img src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} class="card-img-top" alt="..." />
    <img src={props.team_logo_url} class="card-img-right" alt="..." />
    <h1 class="card-title-event">{props.event_name || 'event name'}</h1>
    <h1 class="card-title-date">{props.start_date}</h1>
    <div class="card-body">
  <div className="info-and-fav" >
          <h1 className="card-title-team">{props.team_name || 'team name'}</h1> 
            </div>
                  
    <hr className="seprating" />
    <p class="card-text-left">{props.event_description}</p>
    <table class="table">
        <tr>
          <th >hosted by</th>
          <th >{props.venue_name || 'venue name'}</th>
        </tr>

        <th >offer</th>
        <th >{props.offers || 'offers'}</th>

      </table>  </div>
</div>
</div>
  )
}