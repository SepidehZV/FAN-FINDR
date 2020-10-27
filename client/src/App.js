import React from 'react';
import StateContext from './StateContext';
import SetStateContext from './SetStateContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
/* importing hooks*/
import useApplicationData from './hooks/useApplicationData';

/* importing components */
import NavigationBar from './components/NavigationBar';
import PatronMain from './components/PatronMain';
import VenuePage from './components/VenuePage';
import VenueEvents from './components/VenueEvents';
import VenueMenu from './components/VenueMenu';
import Favourites from './components/Favourites';
import Login from './components/Login';
import SignUpOwner from './components/SignUpOwner';
import SignUpPatron from './components/SignUpPatron';
import VenueAnalytics from './components/VenueAnalytics';
import Profile from './components/Profile';
import PrivateRoute from './PrivateRoute';



function App() {
  const { state, setState } = useApplicationData();


  // const userList = state.users.map(user => (
  //   <li key={user.email}>
  //     {user.first_name} {user.last_name} {user.email}
  //   </li>
  // ));

  const venuesList = state.venues.map(venue => (
    <p key={venue.id}>
      {venue.description}

    </p>
  ));

  const venuesCapacity = state.venues.map(venue => (
    <p key={venue.id}>
      {venue.capacity}

    </p>
  ));

  return (
    <Router>
      <StateContext.Provider value={state}>
        <SetStateContext.Provider value={setState}>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register/patron'>
            <SignUpPatron />
          </Route>
          <Route exact path='/register/owner'>
            <SignUpOwner />
          </Route>
          <PrivateRoute exact path='/'>
            {!state.user_type && <PatronMain />}
            {state.user_type && <VenuePage />}
          </PrivateRoute>
          <PrivateRoute path='/events'>
            <VenueEvents />
          </PrivateRoute>
          <PrivateRoute path='/menu'>
            <VenueMenu />
          </PrivateRoute>
          <PrivateRoute path='/analytics'>
            <VenueAnalytics />
          </PrivateRoute>
          <PrivateRoute exact path='/venues/:id'>
            <VenuePage />
          </PrivateRoute>
          <PrivateRoute path='/venues/:id/events'>
            <VenueEvents />
          </PrivateRoute>

          <PrivateRoute path='/venues/:id/menu'>
            <VenueMenu />
          </PrivateRoute>

          <PrivateRoute path='/favourites'>
            <Favourites />
          </PrivateRoute>
          <PrivateRoute path='/profile'>
            <Profile />
          </PrivateRoute>
        </Switch>
        </SetStateContext.Provider>
      </StateContext.Provider>
    </Router>

  );
}
export default App;