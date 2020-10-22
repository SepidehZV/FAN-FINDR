const express = require('express');
const router = express.Router();

module.exports = ({ getVenues }) => {
  /* GET venues listing. */
  router.get('/', (req, res) => {
    getVenues()
      .then((users) => res.json(users))
      .catch((err) => res.json({ err }));
  });

  

  return router;
};
