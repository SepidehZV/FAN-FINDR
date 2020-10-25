const express = require('express');
const router = express.Router();

module.exports = ({ getVenues ,getVenueById}) => {
  /* GET venues listing. */
  router.get('/', (req, res) => {
    getVenues()
      .then((venues) => res.json(venues))
      .catch((err) => res.json({ err }));
  });

  router.get('/:id',(req,res) =>{
    getVenueById(req.params.id)
    .then((venue) => res.json(venue))
    .catch((err) => res.json({ err }));
  });
  

  return router;
};
