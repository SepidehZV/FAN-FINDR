import React from 'react';
import './Sidebar.scss';

function Sidebar(props) {// we can use this in resutrent owner 

    return (
      <div className="sidenav">
        <div className='container'>

          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">Main</a>
              <hr className="seprating-line" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
              <hr className="seprating-line" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
              <hr className="seprating-line" />
            </li>
            
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;