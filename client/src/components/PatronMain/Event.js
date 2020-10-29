import React, { useContext } from 'react';
import classnames from 'classnames';
import StateContext from '../../StateContext';

export default function Event(props) {
  const state = useContext(StateContext);
  const event = state.events.find(event => props.id === event.id);
  const likeClass = classnames("bi bi-bookmark-heart-fill like", { "bi bi-bookmark-heart-fill like-selected": props.selected })
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
              <span class="badge badge-info">Venue Info</span>
              </div>
              <div className="like" >
                <svg width="2em" height="2em" viewBox="0 0 16 16" class={likeClass} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                </svg>
              </div>
            </div>}
          {state.user_type &&
            <div className="edit-and-delete">
              <div className="delete" >
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
              </div>
              <div className="eidt" >
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-pencil-square event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
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
          <th >offer</th>
        </tr>

        <th >{event.venue_name || 'venue name'}</th>

        <th >{event.offers || 'offers'}</th>

      </table>
    </div>
  )
}