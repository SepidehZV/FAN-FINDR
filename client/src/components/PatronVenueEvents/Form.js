import React from 'react'

export default function Form(props) {
  return (

    <div className="row1">
      <div className="card" >
        <img src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-23-at-12.25.25-AM.png" alt="Avatar" className="avatar" />
        <div className="sport_name">
          <h1 className="sport-title" ><input placeholder="enter the event name"></input></h1>
          <h5 className="time-title"></h5>
        </div>
        <img className="card-img-top" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png" alt="Card image cap" />
        <div className="card-body">
          <div className="edit-and-delete" >
            <div><h5 className="card-title"><input placeholder="enter the team name" /></h5></div>
            <div className="edit-and-delete">
              <div className="delete" ><i className="far fa-save"></i> Save </div>
            </div>
          </div>

          <hr className="seprating" />
          <p className="card-text"><input placeholder="enter the descrption " /></p>
        </div>
        <table className="table">
          <tr>
            <th >hosted by</th>
            <th >offer</th>
          </tr>
          <th >Resturant Name</th>
          <th ><input placeholder="enter the offer if any" /></th>
        </table>
      </div>
    </div>

  );
}