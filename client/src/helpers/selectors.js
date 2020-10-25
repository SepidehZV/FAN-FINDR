export function getVenueByEventID (state,event_id) {
  const event = state.events.find((ev)=> ev.id === event_id);
  const venue = state.venues.find((venue) => venue.id === event.venue_id);
  
  return venue;

}
