import { useState, useEffect } from 'react';
import axios from 'axios';
////////for demo
const mockuser={
"id": 1,
"first_name": "Mario",
"last_name": "Bros",
"username": "MariB",
"email": "mario@nintendo.com",
"user_zip_code": "",
"avatar_url": "https://i.imgur.com/LpaY82x.png",
"user_type": true,
"password": "password"
};
const venue ={
    "id": 1,
    "owner_id": 1,
    "venue_name": "Sens House",
    "street": "73 York St",
    "country": "Canada",
    "venue_zip_code": "K1N 5T2",
    "province": "Ontario",
    "venue_description": "this is a description",
    "phone": "(613) 241-5434",
    "capacity": 50,
    "age_restriction": 18,
    "dress_code": "casual",
    "venue_logo_url": "",
    "category_id": 1,
    "cover_url": "",
    "city": "Ottawa",
    "first_name": "Mario",
    "last_name": "Bros",
    "username": "MariB",
    "email": "mario@nintendo.com",
    "user_zip_code": "",
    "avatar_url": "https://i.imgur.com/LpaY82x.png",
    "user_type": true,
    "password": "password"
  }

const useApplicationData = () => {
  const [state , setState] = useState(
    {
      user_type : null ,
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
      localStorage.clear();
    })
      .catch(err => {
        // console.log(err)
      })
  }, []);
  
  return {
    state,
    setType,
    setUser,
    setState
    //addUserPatron
  };
};

export default useApplicationData;