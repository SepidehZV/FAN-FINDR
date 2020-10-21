import React from 'react';
import logo from './logo.svg';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state, dispatch } = useApplicationData();

  const userList = state.users.map(user => (
    <li key={user.email}>
      {user.first_name} {user.last_name} {user.email}
    </li>
  ));

  return (
    <main className="layout">
      <section className="sidebar">
      </section>
    </main>
  );
}

export default App;