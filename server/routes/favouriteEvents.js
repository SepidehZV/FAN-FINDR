const express = require('express');
const router = express.Router();

module.exports = ({ getFavouritesEvents,getFavouritesEventsCountForDayByVenueId }) => {
  /* GET Events listing. */
  router.get('/', (req, res) => {
    getFavouritesEvents()
      .then((favourites) => res.json(favourites))
      .catch((err) => res.json({ err }));
  });
  router.get('/:id',(req,res) =>{
    getFavouritesEventsCountForDayByVenueId(req.params.id)
      .then((favourite) => res.json(favourite))
      .catch((err) => res.json({ err }));
      console.log(req.params.id)
  });
  return router;
};
