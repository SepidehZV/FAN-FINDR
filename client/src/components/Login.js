import React, {useState, useContext} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.scss';
import loginImg from '../imgLogin.jpg'
import axios from 'axios';
import SetStateContext from '../SetStateContext';

export default function Login() {
    const setState = useContext(SetStateContext);
    
    const history = useHistory();
    const { state } = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3001/api/auth/login', { email, password })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                history.push((state && state.from) || '/');
                setState((prev) => ({...prev, user_type:res.data.user.user_type, user:res.data.user}));
            })

            .catch(error => {
                console.log(error);

            });
        
    };
    return (

        <div>
        <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center"><span className="text-color">F</span>AN <span className="text-color">F</span>INDR</h5>
                <hr className="seprating" />
                <h5 className="text-center">Find your best team near you</h5>

                <form className="form-signin" onSubmit={handleLogin} >
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required autofocus/>
                    <label for="inputEmail">Email address</label>
                  </div>
    
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label for="inputPassword">Password</label>
                  </div>
    
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr className="seprating" />
                </form>

                <form className="form-createPtron">
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><Link to='/register/patron' className="link"> Create a Patron account</Link></button>
                 </form>

                <form className="form-createOwner">
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><Link to='/register/owner' className="link"> Create an owner/manager account</Link></button>
                </form>

              </div>
            </div>
          </div>
        </div>
        <div className="container2">
         <img  className="img_login" src={loginImg} width="700" height="570" alt="img"/>
      </div>

      </div>
    
      </div>

    )
}
