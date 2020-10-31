import React, {useState, useContext} from 'react';
import StateContext from '../../StateContext';
import { Alert } from 'react-bootstrap';

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
    <div className="formcontainer">
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>Edit Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="first">First Name</label>
            <input type="text" className="form-control" placeholder="" id="first" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
        </div>
  
        <div className="col-md-6">
          <div className="form-group">
            <label for="last">Last Name</label>
            <input type="text" className="form-control" placeholder="" id="last" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
          </div>
        </div>
      </div>
  
  
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" className="form-control" placeholder="" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
  
  
        </div>
  
        <div className="col-md-6">
  
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </div>
  
  
      <div className="row">
        <div className="col-md-6">
  
          <div className="form-group">
            <label for="zip-code">Zip-Code</label>
            <input type="zip-code" className="form-control" id="zip-code" placeholder="zip-code" value={user_zip_code} onChange={(e) => setZipcode(e.target.value)}/>
          </div>
        </div>
      </div>  

      {error && <Alert variant='danger'> {error} </Alert> }
      <div className="btn-patron-profile">
      <button type="submit" className="btn btn-primary" onClick={validate}>Save</button>
      <button type="submit" className="btn btn-danger" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  </div>
  )
}