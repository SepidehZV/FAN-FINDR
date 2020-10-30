import React, {useState, useContext} from 'react';
import StateContext from '../../StateContext';
import { Alert } from 'react-bootstrap';
import './index.scss';


export default function Form (props) {
  const state = useContext(StateContext);

  const [first_name, setFirstName] = useState(state.user.first_name);
  const [last_name, setLastName] = useState(state.user.last_name);
  const [username, setUsername] = useState(state.user.username);
  const [email, setEmail] = useState(state.user.email);
  const [user_zip_code, setZipcode] = useState(state.user.user_zip_code);
  const [error, setError] = useState("");
  function validate() {
    
    if (!first_name && !last_name && !username && !email && !user_zip_code) {
      setError("some fields empty");
      return;
    }
    else {
      setError("");
      props.onSave(state.user.id, first_name, last_name, username, email, user_zip_code, state.user);
    }
    
  };

  return(
    <div class="formcontainer">
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>Edit Profile</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="first">First Name</label>
            <input type="text" class="form-control" placeholder="" id="first" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
        </div>
  
        <div class="col-md-6">
          <div class="form-group">
            <label for="last">Last Name</label>
            <input type="text" class="form-control" placeholder="" id="last" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
          </div>
        </div>
      </div>
  
  
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" placeholder="" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
  
  
        </div>
  
        <div class="col-md-6">
  
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </div>
  
  
      <div class="row">
        <div class="col-md-6">
  
          <div class="form-group">
            <label for="zip-code">Zip-Code</label>
            <input type="zip-code" class="form-control" id="zip-code" placeholder="zip-code" value={user_zip_code} onChange={(e) => setZipcode(e.target.value)}/>
          </div>
        </div>
      </div>  

      {error && <Alert variant='danger'> {error} </Alert> }

      <button type="submit" class="btn btn-primary" onClick={validate}>Save</button>
      <button type="submit" class="btn btn-danger" >Cancel</button>

    </form>
  </div>
  )
}
