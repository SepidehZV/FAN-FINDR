import React from 'react';

export default function Event(props) {
  return (
    <div className="card" >
      <img src={props.team_logo_url} alt="Avatar" class="avatar"/>
      <div className="sport_name">
      <h1 className="sport-title">{props.team_name}</h1>
      <h5 className="time-title">{props.start_date}</h5>
</div>
    <img className="card-img-top" src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} alt="Card image cap"/>
    <div className="card-body">
          <div className="edit-and-delete" >
            <div><h5 className="card-title">{props.team_name || 'hiteam name'}</h5> </div>
            <div className="edit-and-delete"> 
              <div className="delete" ><i class="far fa-trash-alt"></i>Delete </div>
              <div className="eidt" ><i class="far fa-edit"></i>Eidt</div>
            </div>
          </div>
      <hr className="seprating" />

      <p className="card-text">{props.event_description}</p>
   
    </div>
          <table class="table">
              <tr>
                <th >hosted by</th>
                <th >offer</th>
              </tr>
             
                <th >{props.venue_name}</th>

                <th >{props.offers}</th>
             
          </table>
  </div>
  )
}