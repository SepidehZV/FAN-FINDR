import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import StateContext from '../../StateContext';

export default function Event(props) {

  
  const state = useContext(StateContext);
  const event = state.events.find(event => props.id === event.id);
  
  const initial = (state.favouriteEvents.find(fav => fav.event_id === event.id)) || false;
  const [select, setSelect] = useState(initial);
  const likeClass = classnames("bi bi-heart-fill", { "bi bi-heart-fill text-danger": select });

  const liked = (ev) => {
    ev.preventDefault();
    console.log('heart clicked');
    if (select) {
      setSelect(false);
      props.removeFav(event.id, state);
      
    } else {
      setSelect(true);
      props.addFav(event.id, state);
    }
  }


  return (
    <div className="card" >
      <img src={props.team_logo_url} alt="team logo" class="avatar" />
      <div className="sport_name">
        <h1 className="sport-title">{event.event_name || 'event name'}</h1>
        <h5 className="time-title">{props.start_date}</h5>
      </div>
      <img className="card-img-top" src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} alt="Card image cap" />
      <div className="card-body">
        <div className="edit-and-delete" >
          <div><h5 className="card-title">{props.team_name || 'team name'}</h5> </div>
          {!state.user_type &&
            <div className="moreInfo-and-like">
              <div className="moreInfo" >
                <span class="badge badge-info"><Link className="navLink" to={`/venues/${event.venue_id}`}>Venue Info</Link></span>
              </div>


              <div className="like"  >
                <svg width="1em" height="1em" viewBox="0 0 16 16" className={likeClass} fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={liked} >
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>

              </div>
            </div>}

        </div>
        <hr className="seprating" />

        <p className="card-text">{props.event_description}</p>

      </div>
      <table class="table">
        <tr>
          <th >hosted by</th>
          <th >{event.venue_name || 'venue name'}</th>
        </tr>

        <th >offer</th>
        <th >{event.offers || 'offers'}</th>

      </table>
    </div>
  )
}