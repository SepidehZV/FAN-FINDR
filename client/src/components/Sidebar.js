import React, {useContext} from 'react';
import './Sidebar.scss';
import {Link} from 'react-router-dom';
import StateContext from '../StateContext';

function Sidebar(props) {// we can use this in resutrent owner 
  const state = useContext(StateContext);
  return (
    <div className="sidenav">
      <div className='container3'>

        <ul className="nav flex-column">
          <li className="nav-item">
            {state.user_type && <li className="nav-link"><Link to='/'> Main</Link></li>}
            {!state.user_type && <li className="nav-link"><Link to={`/venues/${props.currentVenueId}`}> Main</Link></li>}
            <hr className="seprating-line" />
          </li>
          <li className="nav-item">
            {state.user_type && <li className="nav-link" ><Link to='/events'> Events</Link></li>}
            {!state.user_type && <li className="nav-link" ><Link to={`/venues/${props.currentVenueId}/events`}> Events</Link></li>}
            <hr className="seprating-line" />
          </li>
          <li className="nav-item">
            {state.user_type && <li className="nav-link" ><Link to='/menu'>Menu</Link></li>}
            {!state.user_type && <li className="nav-link" ><Link to={`/venues/${props.currentVenueId}/menu`}>Menu</Link></li>}
            <hr className="seprating-line" />
          </li>
          {state.user_type &&
          <li className="nav-item">
            <li className="nav-link" ><Link to='/analytics'>Analytics</Link></li>
            <hr className="seprating-line" />
          </li>}
          
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;