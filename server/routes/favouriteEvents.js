const express = require('express');
const router = express.Router();

module.exports = ({ getFavouritesEventsByUserId,getFavouritesEventsCountForDayByVenueId }) => {
  /* GET Favourite Events For User */
  router.get('/user/:id', (req, res) => {
    
    getFavouritesEventsByUserId(req.params.id)
      .then((favourites) => res.json(favourites))
      .catch((err) => res.json({ err }));
  });
  /* Add Favourite Event  */
  router.post('/', (req, res) => {
    const {created_at, event_id, user_id} = req.body; 
    addNewFavouriteEvent(user_id, event_id,created_at)
      .then(res => res.json(res))
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
