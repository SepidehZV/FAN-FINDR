import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import StateContext from '../../StateContext';
import './index.scss';

export default function Event(props) {

  
  const state = useContext(StateContext);
  const event = state.events.find(event => props.id === event.id);
  
  const initial = state.favouriteEvents.find(fav => fav.event_id === event.id) ? true : false;
  const [select, setSelect] = useState(initial);
  const likeClass = classnames("bi bi-heart-fill", { "bi bi-heart-fill text-danger": select });

  const liked = (ev) => {
    ev.preventDefault();
    console.log('heart clicked');
    if (select) {
      setSelect(false);
    } else {
      setSelect(true);
    }
  }
  return (
  <div className="event-card">
    <div class="card">
  <img src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} class="card-img-top" alt="..." />
    <img src={props.team_logo_url} class="card-img-right" alt="..." />
    <h1 class="card-title-event">{event.event_name || 'event name'}</h1>
    <h1 class="card-title-date">{props.start_date}</h1>

  <div class="card-body">
  <div className="info-and-fav" >
          <h1 className="card-title-team">{props.team_name || 'team name'}</h1> 
          {!state.user_type &&
            <div className="infolink">
              <div className="moreInfo" >
                <h4><span class="badge pr-2"><Link className="navLink" to={`/venues/${event.venue_id}`}>Venue Info</Link></span></h4>
              </div>

              <div className="favlink"  >
                <svg width="1em" height="1em" viewBox="0 0 16 16" className={likeClass} fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={liked} >
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>

              </div>
            </div>}

        </div>
                
    <hr className="seprating" />
    <p class="card-text-left">{props.event_description}</p>
    <table class="table">
        <tr>
          <th >hosted by</th>
          <th >{event.venue_name || 'venue name'}</th>
        </tr>

        <th >offer</th>
        <th >{event.offers || 'offers'}</th>

      </table>  </div>
</div>
</div>
  )
}