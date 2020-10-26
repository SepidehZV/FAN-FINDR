import React  from 'react';
import './index.scss';
import CoverPhoto from '../CoverPohto';
import Sidebar from '../Sidebar';
import MainContainer from './MainContainer';

export default function VenuePage(props) {

  return(
      <div>
        <section><CoverPhoto /></section>
        <div className="conrinerforflex">
          <section><Sidebar /></section>
          <MainContainer/>
        </div>
      </div>
  )
}

