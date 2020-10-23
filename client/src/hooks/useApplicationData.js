import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [state , setState] = useState(
    {
      user_type : false ,
      user_id : '',
      events :[],
      venues : [],
      users : [],
    }
  )
  
  const setType = (user_type)=>{
    setState({...state,user_type})
  };
  const setUser = (user_id)=>{
    setState({...state, user_id})
  }
  // const addNewuser= ()=>{
  //   axios.put
  // }
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3001/api/events'),
      axios.get('http://localhost:3001/api/venues'),
      axios.get('http://localhost:3001/api/users')
     
    ]).then(all => {
      setState(prev => ({ ...prev, events: all[0].data, venues: all[1].data, users: all[2] }));
    })
      .catch(err => {
        // console.log(err)
      })
  }, []);
  
  return {
    state
  };
};

export default useApplicationData;