import React from 'react';

export default function Event(props) {
  return (
    <div className="card" >
      <img src="https://techcrunch.com/wp-content/uploads/2018/07/Logo-1.png" alt="Avatar" class="avatar"/>
      <div className="sport_name">
      <h1 className="sport-title">{props.event.name}</h1>
      <h5 className="time-title">Oct20</h5>
</div>
    <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.team}</h5>
      <hr className="seprating" />

      <p className="card-text">On this day you will have child free meal.</p>
   
    </div>
          <table class="table">
              <tr>
                <th >hosted by</th>
                <th >offer</th>
              </tr>
             
                <th >Resturant Name</th>

                <th >60% discount</th>
             
          </table>
  </div>
  )
}