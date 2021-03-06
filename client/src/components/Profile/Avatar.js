import React, {useState, useContext} from 'react';
import StateContext from '../../StateContext';

export default function Avatar(props) {
  const state = useContext(StateContext);
  const [avatar_url, setAvatar] = useState(state.user.avatar_url);
  
  
  function handleSave (event) {
    event.preventDefault();
    props.saveAvatar(avatar_url,state);
  }
  function handleCancel (event) {
    event.preventDefault();
    props.onCancel();
  }
  const selectAvatar = (event) => {
    
    setAvatar(event.target.src)
  }
  return(
    <div className="form-group-avatars">
    <div className="thumbnail">
      <img src="images/avatars/avatar-1.png" className="img-circle avatar-pic" alt="avatar-1" onClick={selectAvatar}/>
      <img src="images/avatars/avatar-2.png" className="img-circle avatar-pic" alt="avatar-2" onClick={selectAvatar}/>
      <img src="images/avatars/avatar-3.png" className="img-circle avatar-pic" alt="avatar-3" onClick={selectAvatar}/>
      <img src="images/avatars/avatar-4.png" className="img-circle avatar-pic" alt="avatar-4" onClick={selectAvatar}/>
      <img src="images/avatars/avatar-5.png" className="img-circle avatar-pic" alt="avatar-5" onClick={selectAvatar}/>
      <img src="images/avatars/avatar-6.png" className="img-circle avatar-pic" alt="avatar-6" onClick={selectAvatar}/>
      
      
    </div>
    <div className="btn-avatars">
      <button type="submit" className="btn btn-success edit-btn" onClick={handleSave}>Save</button>
      <button type="submit" className="btn btn-danger edit-btn"onClick={handleCancel}>Cancel</button>
    </div>
    
    </div>
  )

}