import { useEffect, useReducer } from 'react';
import dataReducer, { SET_USERS, SET_VENUES, SET_EVENTS, SET_SPORTS, SET_TEAMS } from '../reducers/dataReducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    venues: [],
    events: [],
    sports: [],
    teams: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/users',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: SET_USERS, users: data });
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/venues',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: SET_VENUES, venues: data });
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/events',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: SET_EVENTS, events: data });
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/sports',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: SET_SPORTS, sports: data });
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3001/api/teams',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: SET_TEAMS, teams: data });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;