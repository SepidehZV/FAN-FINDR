import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.scss';
import loginImg from '../imgLogin.jpg';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import SetStateContext from '../SetStateContext';
import StateContext from '../StateContext';
export default function Login() {
  const setState = useContext(SetStateContext);
  const state = useContext(StateContext)
  const history = useHistory();
  const { location } = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  useEffect(() => {
    if (!alert) {
      return;
    }
    document.querySelector('html').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [alert]);

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/api/auth/login', { email, password })
      .then(res => {
        //console.log(res.data)
        localStorage.setItem('token', res.data.token);
        
        const user = res.data.user;
        if (user.user_type) {
          const venueId = state.venues.find(venue => venue.owner_id === user.id).id;
          axios
            .get(`http://localhost:3001/api/venues/${venueId}`)
            .then(res => {
              //console.log(res);
              const venue = {id: venueId, ...res.data[0]};
              return setState((prev) => ({ ...prev, user, user_type: user.user_type, venue }));
            })
        }
        history.push((location && location.from) || '/');
        setState((prev) => ({ ...prev, user_type: res.data.user.user_type, user: res.data.user }));
      })

      .catch(error => {
        console.log(error.response);
        setAlert(error.response.data);

      });

  };
  return (

    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  {alert &&
                    <Alert variant='danger'>
                      {alert}
                    </Alert>}
                  <h1 className="card-title text-center"><span className="text-color">F</span>AN <span className="text-color">F</span>INDR</h1>
                  <hr className="seprating" />
                  <h5 className="text-center pb-4">Find your best team near you</h5>
                  <form onSubmit={handleLogin} >
                    <div class="form-label-group">
                      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required autofocus />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                      <input type="password" id="inputPassword" class="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      <label for="inputPassword">Password</label>
                    </div>

                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" class="custom-control-input" id="customCheck1" />
                      <label class="custom-control-label" for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                    <div class="custom-control custom-checkbox mb-3">
                      <a class="small" href="#">Forgot password?</a>
                    </div>

                    <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit"><Link to='/register/patron' className="link"> Create a Patron account</Link></button>
                    <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit"> <Link to='/register/owner' className="link"> Create an owner/manager account</Link></button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
