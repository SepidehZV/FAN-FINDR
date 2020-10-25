import React from 'react';

function Info(props) {
  return (
    <div className="conrinerforPadding">
      <div class="col">
        <div>Info</div>
        <hr className="seprating" />
        <table class="table">
          <thead>
            <tr>
              <th >Email</th>
              <th >{props.email || 'Logoresturent@example.com'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th >Phone</th>
              <td>{props.phone || '555-555'}</td>
            </tr>
            <tr>
              <th >Categorie</th>
              <td>{props.categorie || 'resturent'}</td>
            </tr>
            <tr>
              <th >Capacity</th>
              <td>{props.venueCapacity || '20'}</td>
            </tr>
            <tr>
              <th >Dress code</th>
              <td>{props.dress_code || 'formal'}</td>
            </tr>
            <tr>
              <th >Age restriction</th>
              <td>{props.age_restriction || '16'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )


};
export default Info;