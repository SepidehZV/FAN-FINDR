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
      props.onSave(state.user.id, first_name, last_name, username, email, user_zip_code);
    }
    
  };

  return(
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input class="form-control" type="text" placeholder="Default input" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input class="form-control" type="text" placeholder="Default input" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input class="form-control" type="text" placeholder="Default input" value={username} onChange={(e) => setUsername(e.target.value)}/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input class="form-control" type="text" placeholder="Default input" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>

<div class="form-group">
    <label for="exampleInputEmail1">Zip-Code</label>
    <input class="form-control" type="text" placeholder="Default input" value={user_zip_code} onChange={(e) => setZipcode(e.target.value)}/>
  </div>
  
  {error && <Alert variant='danger'> {error} </Alert> }
  <button type="submit" class="btn btn-primary" onClick={validate}>Save</button>

  <button type="submit" class="btn btn-primary">Cancel</button>
</form>
    </div>
  )
}
