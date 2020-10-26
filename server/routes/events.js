const express = require('express');
const router = express.Router();

module.exports = ({ getEvents, getEventFavForDayByEventId, addNewEvent }) => {
  /* GET Events listing. */
  router.get('/', (req, res) => {
    getEvents()
      .then((events) => res.json(events))
      .catch((err) => res.json({ err }));
  });
  router.get('/:id', (req, res) => {
    getEventFavForDayByEventId(req.params.id)
      .then((event) => res.json(event))
      .catch((err) => res.json({ err }));
  });
  router.post('/', (req,res) => {
    const {event_name, event_description, offers, start_date, end_date,venue_id, team_id} = req.body
    addNewEvent(event_name, event_description, offers, start_date, end_date,venue_id, team_id)
      .then((data) => { 
        console.log(data)
        return res.json(data)

      })
      .catch((err) => res.json({ err }));
  })


  return router;
};
