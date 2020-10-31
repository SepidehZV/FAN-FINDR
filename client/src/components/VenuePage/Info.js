import React from 'react';

function Info(props) {

  return (
    <div className="conrinerforPadding">
      <div class="col">
        <h3>Information</h3>
        <hr className="seprating" />
        <table class="table">
          <thead>
            <tr>
              <th >Email</th>
              <th >{props.venue_email}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th >Phone</th>
              <td>{props.phone }</td>
            </tr>
            {/* <tr>
              <th >Category</th>
              <td>{props.categorie_name}</td>
            </tr> */}
            <tr>
              <th >Capacity</th>
              <td>{props.capacity }</td>
            </tr>
            <tr>
              <th >Dress code</th>
              <td>{props.dress_code }</td>
            </tr>
            <tr>
              <th >Age restriction</th>
              <td>{props.age_restriction}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )


};
export default Info;