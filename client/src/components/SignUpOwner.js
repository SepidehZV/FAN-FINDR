import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './SignUpOwner.scss';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import SetStateContext from '../SetStateContext';
import StateContext from '../StateContext';

export default function SignUpOwner() {

  const setState = useContext(SetStateContext);
  const state = useContext(StateContext);
  const history = useHistory();
  const { location } = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [venue_zip_code, setZipCode] = useState('');
  const [venue_name, setVenueName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) {
      return;
    }
    document.querySelector('html').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [alert]);

  const handleSignupOwner = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return setAlert('Confirm password does not match password');
    }
    axios
      .post('http://localhost:3001/api/auth/owner',
      { first_name, last_name, username, email, password, venue_zip_code, street, city, country, province, venue_name })
      .then(res => {
        const newVenue = res.data.newVenue;
        const venues = [...state.venues, newVenue];
        localStorage.setItem('token', res.data.token);
        history.push((location && location.from) || '/');
        setState((prev) => ({ ...prev, user_type: res.data.user.user_type, user: res.data.user, venues: venues, venue:newVenue }));
      })

      .catch(error => {
        setAlert(error.response.data);
        console.log(error);});

  }

    return (
      <div className="containerr">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          {alert &&
          <Alert variant='danger'>
            {alert}
          </Alert>}
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center"><span className="text-color">F</span>AN <span className="text-color">F</span>INDR</h5>
              <hr className="seprating" />
              <h5 className="text-center pb-4">Registertion for venue owner account </h5>

              <form className="form-signin" >
                <div className="form-label-group">
                  <input type="First Name" id="First Name" className="form-control" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)}  required/>
                  <label htmlFor="First Name">First Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Last Name" id="Last Name" className="form-control" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)}  required/>
                  <label htmlFor="Last Name">Last  Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Username" id="Username" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  required/>
                  <label htmlFor="Username">Username</label>
                </div>

                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus/>
                  <label htmlFor="inputEmail">Email address</label>
                </div>
               
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <div className="form-label-group">
                  <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  <label htmlFor="inputConfirmPassword">Confirm Password</label>
                </div>

                <div className="form-label-group">
                  <input type="Venue name" id="Venue name" className="form-control" placeholder="Venue name" value={venue_name} onChange={(e) => setVenueName(e.target.value)}  required/>
                  <label htmlFor="Venue name">Venue Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Street" id="Street" className="form-control" placeholder="Street"  required value={street} onChange={(e) => setStreet(e.target.value)} />
                  <label htmlFor="Street">Street</label>
                </div>

                <div className="form-label-group">
                  <input type="City" id="City" className="form-control" placeholder="City"  required value={city} onChange={(e) => setCity(e.target.value)} />
                  <label htmlFor="City">City</label>
                </div>

                <div className="form-label-group" >
                  <select className=" form-control custom-select browser-default"value={province} onChange={(e) => setProvince(e.target.value)} >
                    <option value="" selected="selected" >Province</option>                    
                    <option value="AB" >Alberta</option>
                    <option value="BC">British Columbia</option>
                    <option value="ON">Ontario</option>
                    <option value="QC">Quebec</option>
                  </select> 
                </div>

                <div className="form-label-group">
                  <select className=" form-control custom-select browser-default" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="" selected="selected">Country</option> 
                    <option value="Canada">Canada</option>
                  </select> 
                </div>

                <div className="form-label-group">
                  <input type="Zip-Code" id="Zip-Code" className="form-control" placeholder="Zip-Code" value={venue_zip_code} onChange={(e) => setZipCode(e.target.value)} required/>
                  <label htmlFor="Zip-Code">Zip-Code</label>
                </div>

                </form>


               

              <form className="form-createPtron">
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={handleSignupOwner}> Create An account</button>
               </form>

              <form className="form-createOwner">
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><Link to='/login' className="link"> Login page</Link></button>
              </form>
            

            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
