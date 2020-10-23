const express = require('express');
const router = express.Router();

module.exports = ({ getSports }) => {
  /* GET Sports listing. */
  router.get('/', (req, res) => {
    getSports()
      .then((sports) => res.json(sports))
      .catch((err) => res.json({ err }));
  });


  

  return router;
};
