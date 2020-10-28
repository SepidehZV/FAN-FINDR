import React from 'react';
import './ProfilPatron.scss';


function Info(props) {
  return (
    <div className="container-patron">
    <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">My Profile</span>
      </h4>
      <hr className="seprating" />

      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">First name</h6>
          </div>
          <span class="text-muted">zainab</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Last Name</h6>
          </div>
          <span class="text-muted">RR</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Username</h6>
          </div>
          <span class="text-muted">zia</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Email</h6>
          </div>
          <span class="text-muted">User@example.com</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Zip Code</h6>
          </div>
          <span class="text-muted">K7A 1A2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Favorite Team</h6>
          </div>
          <span class="text-muted">Toronto Maple Leafs</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Favorite Sport</h6>
          </div>
          <span class="text-muted">Football</span>
        </li>
      </ul>
      </div>
      </div>
      </div>


  )


};
export default Info;