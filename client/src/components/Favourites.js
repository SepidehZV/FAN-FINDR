import React, {useContext} from 'react'
import Event from './PatronMain/Event';
import StateContext from '../StateContext';
import NavigationBar from './NavigationBar';
import CoverPhoto from './CoverPohto';
export default function Favourites(props) {
    const state = useContext(StateContext);
    const favouriteEventsId = state.favouriteEvents.map(fav => fav.event_id);
    const favouriteEvents = state.events.filter(event =>  favouriteEventsId.includes(event.id));
    //console.log(favouriteEvents);
    const eventList = favouriteEvents.map((event) =>{
        return (
            <Event
              key={event.id}
              id={event.id}
              venue_id={event.venue_id}
              event_description={event.event_description}
              event_name={event.event_name}
              venue_name={event.venue_name}
              team_name={event.team_name}
              offers={event.offers}
              venue_logo_url={event.venue_logo_url}
              start_date={event.start_date}
              addFav={props.addFav}
              removeFav={props.removeFav}
              sport_name={event.sport_name}
            />
          );
    })


    return (
        <div>
            <NavigationBar />
            <CoverPhoto  />
            <div className=" favourite-events">
            {eventList}
            </div>
            
        </div>
    )
}
