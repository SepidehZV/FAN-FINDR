const express = require('express');
const router = express.Router();

module.exports = ({ getSports, addSport }) => {
  /* GET Sports listing. */
  router.get('/', (req, res) => {
    getSports()
      .then((sports) => res.json(sports))
      .catch((err) => res.json({ err }));
  });

  router.post('/', (req,res) => {
    const {sport_name,photo_url} = req.body;
    addSport(sport_name,photo_url)
      .then((sport) => res.json(sport))
      .catch((err) => res.json({ err }));
  })

  

  return router;
};
