import React from 'react';
import StateContext from './StateContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/* importing hooks*/
import useApplicationData from './hooks/useApplicationData';

/* importing components */
import NavigationBar from './components/NavigationBar';
import PatronMain from './components/PatronMain/Index';
import VenuePage from './components/VenuePage';
import VenueEvents from './components/VenueEvents';
import VenueMenu from './components/VenueMenu';
import Favourites from './components/Favourites';
import Login from './components/Login';
import SignUpOwner from './components/SignUpOwner';
import SignUpPatron from './components/SignUpPatron';
import VenueAnalytics from './components/VenueAnalytics';


function App() {
  const { state } = useApplicationData();

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
    // <main className="layout">
    // <Router>
    //   <NavigationBar/>
    //   <StateContext.Provider value={state}>
    //   <Switch>

    //     <Route exact path='/'>
    //       {!state.user_type && <PatronMain />}
    //       {state.user_type && <VenuePage />}
    //     </Route>
    //     <Route path='/events'>  /*owner route*/ 
    //       <VenueEvents/>
    //     </Route>
    //     <Route path='/menu'>  /*owner route*/
    //       <VenueMenu/>
    //     </Route>
    //     <Route path='/analytics'>  /*owner route*/
    //       <VenueAnalytics/>
    //     </Route>
    //     <Route exact path='/venues/:id'>  /*patron route*/
    //       <VenuePage/>
    //     </Route>
    //     <Route path='/venues/:id/events'>  /*patron route*/
    //       <VenueEvents/>
    //     </Route>
    //     </Route>
    //     <Route path='/venues/:id/menu'>  /*patron route*/
    //       <VenueMenu/>
    //     </Route>
    //     
    //     <Route path='/favourites'>  /*patron route*/
    //       <Favourites/>
    //     </Route>

    //     <Route path='/profile'>  /*patron  & owner route*/
    //       {!state.user_type && <ProfilePatron/>}
    //       {state.user_type && <ProfileOwner/>}
    //     </Route>

    //     <Route path='/login'>
    //       <Login />
    //     </Route>
    //     <Route path= '/register/patron'>
    //       <SignUpPatron/>
    //     </Route>
    //     <Route path='/register/owner'>
    //       <SignUpOwner/>
    //     </Route>

    //     <Route path="*">
    //       <h3>404 - Not Found</h3>
    //     </Route>
    //   </Switch>
    //   </StateContext.Provider>
    // </Router>
    // </main>
    <Router>
       <main className="layout">
      <section><NavigationBar /></section>
      
        <VenueAnalytics/>
      {/* <PatronMain events={state.events} teams={state.teams} /> */}
      {/* <SearchBar/>
         <Event/> */}
      {/* <SignUpPatron/>*/}

    </main>
    </Router>
   
  );
}
export default App;