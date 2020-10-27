import React, {useState, useContext} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './SignUpOwner.scss';
export default function SignUpOwner() {
    return (
      <div className="containerr">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center"><span className="text-color">F</span>AN <span className="text-color">F</span>INDR</h5>
              <hr className="seprating" />
              <h5 className="text-center pb-4">Find your best team near you</h5>

              <form className="form-signin">
                <div className="form-label-group">
                  <input type="First Name" id="First Name" className="form-control" placeholder="First Name"  required/>
                  <label for="First Name">First Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Last Name" id="Last Name" className="form-control" placeholder="Last Name"  required/>
                  <label for="Last Name">Last  Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Username" id="Username" className="form-control" placeholder="Username"  required/>
                  <label for="Username">Username</label>
                </div>

                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address"  required autofocus/>
                  <label for="inputEmail">Email address</label>
                </div>
               
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password"  required/>
                  <label for="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                  <input type="Venue name" id="Venue name" className="form-control" placeholder="Venue name"  required/>
                  <label for="Venue name">Venue Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Zip-Code" id="Zip-Code" className="form-control" placeholder="Zip-Code"  required/>
                  <label for="Zip-Code">Zip-Code</label>
                </div>

                <div className="form-label-group">
                <select className=" form-control custom-select browser-default">
                    <option value="Afghanistan">Afghanistan</option></select> 
                </div>

                <div className="form-label-group">
                  <input type="City" id="City" className="form-control" placeholder="City"  required/>
                  <label for="City">City</label>
                </div>

                <div className="form-label-group">
                <select className=" form-control custom-select browser-default">
                    <option value="Provinve">Ottawa</option></select> 
                </div>
                </form>


               

              <form className="form-createPtron">
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> Create An account</button>
               </form>

              <form className="form-createOwner">
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><Link to='/login'> Login page</Link></button>
              </form>
            

            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
