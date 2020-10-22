const express = require('express');
const router = express.Router();

module.exports = ({ getEvents }) => {
  /* GET Events listing. */
  router.get('/', (req, res) => {
    getEvents()
      .then((users) => res.json(users))
      .catch((err) => res.json({ err }));
  });


  

  return router;
};
