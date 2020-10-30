

const express = require('express');
const router = express.Router();



module.exports = ({ getAllMenues}) => {

  /* GET venues listing. */
  router.get('/', (req, res) => {
    getAllMenues()
      .then((menus) => res.json(menus))
      .catch((err) => res.json({ err }));
  });

  return router;
}