const express = require('express');
const router = express.Router();

module.exports = ({ getFavouritesEvents }) => {
  /* GET Events listing. */
  router.get('/', (req, res) => {
    getFavouritesEvents()
      .then((users) => res.json(users))
      .catch((err) => res.json({ err }));
  });


  

  return router;
};
