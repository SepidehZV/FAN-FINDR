import React from 'react';

export default function Event(props) {
  return (
    <div className="card" >
      <img src={props.teamUlogoUrl} alt="Avatar" class="avatar"/>
      <div className="sport_name">
      <h1 className="sport-title">{props.eventName}</h1>
      <h5 className="time-title">{props.startDate}</h5>
</div>
    <img className="card-img-top" src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.teamName}</h5>
      <hr className="seprating" />

      <p className="card-text">{props.description}</p>
   
    </div>
          <table class="table">
              <tr>
                <th >hosted by</th>
                <th >offer</th>
              </tr>
             
                <th >{props.venueName}</th>

                <th >{props.offer}</th>
             
          </table>
  </div>
  )
}