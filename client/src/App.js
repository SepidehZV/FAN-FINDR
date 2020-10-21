import React from 'react';
import logo from './logo.svg';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  NavigationBar  from './components/NavigationBar';
import Sidebar from './components/Sidebar';

function App() {
  const { state, dispatch } = useApplicationData();

  const userList = state.users.map(user => (
    <li key={user.email}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ));

  return (
<div><NavigationBar/></div>  
  
  );
}

export default App;