import React ,{useContext,useState ,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import CoverPhoto from './CoverPohto';
import Sidebar from '../Sidebar';
import MainContainer from './MainContainer';
import SetStateContext from '../../SetStateContext';
import StateContext from '../../StateContext';
import NavigationBar from '../NavigationBar';

export default function VenuePage(props) {
  const state = useContext(StateContext);
  const setState = useContext(SetStateContext);
  const { id } = useParams();
  const [hours, setHours] = useState([]);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:3001/api/venues/${id}/hours`),
      axios.get(`http://localhost:3001/api/venues/${id}/photos`),
     
    ]).then(all => {
      setHours(all[0].data);
      setPhotos(all[1].data);
    })
      .catch(err => {
        console.log(err)
      })
  }, [id])
  
    const venue = state.venues[id - 1];
 
    
    

    return( 
      <div>
      {!state.user_type && <main className="layout">
        <div>
          <section><NavigationBar /></section>
          <section><CoverPhoto cover_url={venue.cover_url} logo_url={venue.venue_logo_url}/></section>
          <div className="conrinerforflex">
            <section><Sidebar currentVenueId={id} /></section>
            
            <MainContainer venue={venue} hours={hours} photos={photos}/>
          </div>
          
          </div>
          </main>}
          
          </div>
    );

  }
  
  

