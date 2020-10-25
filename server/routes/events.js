const express = require('express');
const router = express.Router();

module.exports = ({ getEvents, getEventFavForDayByEventId }) => {
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


  return router;
};
