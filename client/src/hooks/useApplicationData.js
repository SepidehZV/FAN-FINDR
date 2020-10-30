import { useState, useEffect } from 'react';
import axios from 'axios';


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
  
  function editPatronProfile (id, first_name,last_name, username, email, user_zip_code, userObj) {
    //console.log('user,userId: ',user,userId)
    const updatedUser = {...userObj, first_name,last_name, username, email, user_zip_code};
    return axios
      .put(`http://localhost:3001/api/users/${id}`, {first_name,last_name, username, email, user_zip_code})
      .then(res => setState(prev => ({...prev, user: updatedUser})))
  }

  function addFav (event_id, state) {
    const newFavouriteEvent = {
      created_at: new Date().toLocaleString(),
      event_id
    }
    const newFavouriteEvents = [...state.favouriteEvents, newFavouriteEvent];
    return axios
      .post('http://localhost:3001/api/favouriteEvents', {...newFavouriteEvent, user_id: state.user.id} )
      .then(res => setState(prev => ({...prev,favouriteEvents:newFavouriteEvents })))
      .catch(err => {
        console.log(err)
      })
  };

  function removeFav (event_id, state) {
    const removedFavouriteEvent = state.favouriteEvents
    .find(fav => fav.event_id === event_id);

    const updatedFavouriteEvents = state.favouriteEvents
      .filter(fav => fav.event_id !== event_id);
    return axios
      .delete(`http://localhost:3001/api/favouriteEvents/${removedFavouriteEvent.id}`,removedFavouriteEvent )
      .then(res => setState(prev => ({...prev, favouriteEvents: updatedFavouriteEvents})))
      .catch(err => {
        console.log(err)
      })

  }

  
  useEffect(() => {
    localStorage.clear();
    Promise.all([
      axios.get('http://localhost:3001/api/events'),
      axios.get('http://localhost:3001/api/venues'),
      axios.get('http://localhost:3001/api/users'),
      axios.get('http://localhost:3001/api/menus')
     
    ]).then(all => {
      setState(prev => ({ ...prev, events: all[0].data, venues: all[1].data, users: all[2].data, menus: all[3].data }));   
    })
      .catch(err => {
        console.log(err)
      })
  }, []);
  
  return {
    state,
    setType,
    setUser,
    setState,
    editPatronProfile,
    addFav,
    removeFav
    
  };
};

export default useApplicationData;