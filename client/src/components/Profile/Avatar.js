import React from 'react';

export default function Avatar(props) {

  return(
    <div class="container-avatars">
    <div class="thumbnail">
      <img src="images/avatars/avatar-1.png" class="img-circle" alt="avatar-1"/>
      <img src="images/avatars/avatar-2.png" class="img-circle" alt="avatar-2"/>
      <img src="images/avatars/avatar-3.png" class="img-circle" alt="avatar-3"/>
      <img src="images/avatars/avatar-4.png" class="img-circle" alt="avatar-4"/>
      <img src="images/avatars/avatar-5.png" class="img-circle" alt="avatar-5"/>
      <img src="images/avatars/avatar-6.png" class="img-circle" alt="avatar-6"/>
      
      
    </div>
    <button type="submit" class="btn btn-success">Save</button>
    <button type="submit" class="btn btn-danger">Cancel</button>
    </div>
  )

}