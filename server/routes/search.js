const express = require('express');
const router = express.Router();

module.exports = ({ searchForEvent }) => {
  /* GET Sports listing. */
  router.get('/:name', (req, res) => {
    searchForEvent(req.params.name)
      .then((events) => res.json(events))
      .catch((err) => res.json({ err }));
  });


  

  return router;
};
