import React from 'react';
import StateContext from './StateContext';
import SetStateContext from './SetStateContext';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/* importing hooks*/
import useApplicationData from './hooks/useApplicationData';

/* importing components */
import NavigationBar from './components/NavigationBar';
import PatronMain from './components/PatronMain';
import VenuePage from './components/VenuePage';
import VenuePagePatron from './components/VenuePagePatron';
import PatronVenueEvents from './components/PatronVenueEvents';
import VenueEvents from './components/VenueEvents';
import VenueMenu from './components/VenueMenu';
import PatronVenueMenu from './components/PatronVenueMenu';
import Favourites from './components/Favourites';
import Login from './components/Login';
import SignUpOwner from './components/SignUpOwner';
import SignUpPatron from './components/SignUpPatron';
import VenueAnalytics from './components/VenueAnalytics';
import Profile from './components/Profile';
import PrivateRoute from './PrivateRoute';



function App() {
  const { state,
    setState,
    editPatronProfile,
    editVenuePage,
    addFav,
    removeFav } = useApplicationData();


  // const userList = state.users.map(user => (
  //   <li key={user.email}>
  //     {user.first_name} {user.last_name} {user.email}
  //   </li>
  // ));

  // const venuesList = state.venues.map(venue => (
  //   <p key={venue.id}>
  //     {venue.description}

  //   </p>
  // ));

  // const venuesCapacity = state.venues.map(venue => (
  //   <p key={venue.id}>
  //     {venue.capacity}

  //   </p>
  // ));

  return (
    <Router>
      <StateContext.Provider value={state}>
        <SetStateContext.Provider value={setState}>
        <Switch>
        <Route exact path='/login'>
            {localStorage.getItem('token')? <Redirect to='/'/> : <Login />}
          </Route>
          <Route exact path='/register/patron'>
            <SignUpPatron />
          </Route>
          <Route exact path='/register/owner'>
            <SignUpOwner />
          </Route>
          <PrivateRoute exact path='/'>
            {!state.user_type && <PatronMain addFav={addFav} removeFav={removeFav}/>}
            {state.user_type && <VenuePage editVenuePage = {editVenuePage}/>}
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
            <VenuePagePatron />
          </PrivateRoute>
          <PrivateRoute path='/venues/:id/events'>
            <PatronVenueEvents />
          </PrivateRoute>

          <PrivateRoute path='/venues/:id/menu'>
            <PatronVenueMenu />
          </PrivateRoute>

          <PrivateRoute path='/favourites'>
            <Favourites />
          </PrivateRoute>
          <PrivateRoute path='/profile'>
            <Profile editPatronProfile = {editPatronProfile} />
          </PrivateRoute>
        </Switch>
        </SetStateContext.Provider>
      </StateContext.Provider>
    </Router>

  );
}
export default App;