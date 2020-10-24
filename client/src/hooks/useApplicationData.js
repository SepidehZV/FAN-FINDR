import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state , setState] = useState(
    {
      user_type : false ,
      user:{},
      events :[],
      venues : [],
      users : []
    }
  )
  
  const setType = (user_type)=>{
    setState({...state,user_type})
  };
  const setUser = (user_id)=>{
    setState({...state, user_id})
  }
  
  

  // function addUserPatron(user) {

  //   axios
  //     .post('http://localhost:3001/api/register/patron', { user.first_name, user.last_name, user.username, user.email, user.user_zip_code, user.password })
  //     .then(res => {
  //       console.log("server says", res.data)
  //       setState(prev => ({ ...prev, user_id: res.data.id }))

  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setAlert('User already exists!');
  //     });
  // }
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3001/api/events'),
      axios.get('http://localhost:3001/api/venues'),
      axios.get('http://localhost:3001/api/users'),
     
    ]).then(all => {
      setState(prev => ({ ...prev, events: all[0].data, venues: all[1].data, users: all[2] }));
    })
      .catch(err => {
        // console.log(err)
      })
  }, []);
  
  return {
    state,
    setType,
    setUser
    //addUserPatron
  };
};

export default useApplicationData;