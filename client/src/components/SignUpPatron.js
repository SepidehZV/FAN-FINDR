import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './SignupPatron.scss';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import SetStateContext from '../SetStateContext';

export default function SignUp_Patron() {

  const setState = useContext(SetStateContext);
  const history = useHistory();
  const { state } = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [user_zip_code, setZipCode] = useState('');
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

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return setAlert('Confirm password does not match password');
    }
    axios
      .post('http://localhost:3001/api/auth/patron', { first_name, last_name, username, email, password, user_zip_code })
      .then(res => {
        
        localStorage.setItem('token', res.data.token);
        history.push((state && state.from) || '/');
        setState((prev) => ({ ...prev, user_type: res.data.user.user_type, user: res.data.user }));
      })

      .catch(error => {
        setAlert('User already exists!');
        console.log(error);

      });

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
              <h5 className="text-center pb-4">Registertion for patron account </h5>

              <form className="form-signin" >
                <div className="form-label-group">
                  <input type="First Name" id="First Name" className="form-control" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
                  <label for="First Name">First Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Last Name" id="Last Name" className="form-control" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
                  <label for="Last Name">Last  Name</label>
                </div>

                <div className="form-label-group">
                  <input type="Username" id="Username" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  <label for="Username">Username</label>
                </div>

                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required autofocus />
                  <label for="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label for="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  <label for="inputConfirmPassword">Confirm Password</label>
                </div>
                
                <div className="form-label-group">
                  <input type="Zip-Code" id="Zip-Code" className="form-control" placeholder="Zip-Code" value={user_zip_code} onChange={(e) => setZipCode(e.target.value)} required />
                  <label for="Zip-Code">Zip-Code</label>
                </div>
              </form>

              <form className="form-createPtron">
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={handleSignup}> Create An account</button>
              </form>

              <form className="form-createOwner">
                <button className="btn btn-lg btn-primary btn-block text-uppercase" > <Link to='/login' className="link">Login Page</Link></button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
