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
  const state = useContext(StateContext);
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
        localStorage.setItem('token', res.data.token);
        
        const user = res.data.user;
        if (user.user_type) {
          const venue = state.venues.find(venue => venue.owner_id === user.id);
          const venueId = state.venues.find(venue => venue.owner_id === user.id).id;
          axios
            .get(`http://localhost:3001/api/venues/${venueId}`)
            .then(res => {
             
              Promise.all([
                axios.get(`http://localhost:3001/api/venues/${venueId}/menu`),
                axios.get(`http://localhost:3001/api/venues/${venueId}/hours`),
                axios.get(`http://localhost:3001/api/venues/${venueId}/photos`),
               
              ]).then(all => {
             
                setState(prev => ({ ...prev, user,
                  user_type: user.user_type, 
                  venue,
                  menuList: all[0].data,
                  venueHours: all[1].data, 
                  venuePhotos: all[2].data }));   
              })
                .catch(err => {
                  console.log(err)
                })
            })
        } else {
          axios
            .get(`http://localhost:3001/api/favouriteEvents/user/${user.id}`)
            .then(res => {
              
              const favouriteEvents = res.data;
              setState((prev) => 
                ({ ...prev, user_type: user.user_type, user, favouriteEvents }));
            })
          
        }
        history.push((location && location.from) || '/');
        
      })

      .catch(error => {
        console.log(error.response.data);
        setAlert(error.response.data);

      });

  };
  return (

    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  {alert &&
                    <Alert variant='danger'>
                      {alert}
                    </Alert>}
                  <h1 className="card-title text-center"><span className="text-color">F</span>AN <span className="text-color">F</span>INDR</h1>
                  <hr className="seprating" />
                  <h5 className="text-center pb-4">Find your best team near you</h5>
                  <form onSubmit={handleLogin} >
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                    <div className="custom-control custom-checkbox mb-3">
                      <a className="small" href="#">Forgot password?</a>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit"><Link to='/register/patron' className="link"> Create a Patron account</Link></button>
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit"> <Link to='/register/owner' className="link"> Create an owner/manager account</Link></button>

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
