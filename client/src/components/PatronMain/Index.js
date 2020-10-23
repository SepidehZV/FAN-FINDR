import React from 'react';
import './Index.scss';
import EventList from './EventList';
import SearchBar from './SearchBar';


export default function PatronMain(props) {
  return (

    <div className="continerforbackgroundcolor">
      <SearchBar/>
      <EventList events={props.events} teams={props.teams}/>

    </div>

  );
}