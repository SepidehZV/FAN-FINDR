const express = require('express');
const router = express.Router();

module.exports = ({ getFavouritesEventsByUserId,
  removeFavouriteEventById,
  addNewFavouriteEvent }) => {
  /* GET Favourite Events For User */
  router.get('/user/:id', (req, res) => {
    
    getFavouritesEventsByUserId(req.params.id)
      .then((favourites) => res.json(favourites))
      .catch((err) => res.json({ err }));
  });
  /* Add Favourite Event  */
  router.post('/', (req, res) => {
    const {created_at, event_id, user_id} = req.body; 
    console.log(req.body);
    addNewFavouriteEvent(user_id, event_id,created_at)
      .then((res) => res.json(res))
      .catch((err) => res.json({ err }));
  });

  router.delete('/:id',(req,res) =>{
    removeFavouriteEventById(req.params.id)
      .then((res) => res.json(res))
      .catch((err) => res.json({ err }));
      console.log(req.params.id)
  });
  return router;
};
