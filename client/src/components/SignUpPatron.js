import React, {useState, useContext} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './SignupPatron.scss';
export default function SignUp_Patron() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSignup = (event) => {
        event.preventDefault();

    }
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
                  <input type="Zip-Code" id="Zip-Code" className="form-control" placeholder="Zip-Code"  required/>
                  <label for="Zip-Code">Zip-Code</label>
                </div>
              </form>

              <form className="form-createPtron">
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> Create An account</button>
               </form>

              <form className="form-createOwner">
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> <Link to='/login'  className="link">Login Page</Link></button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
