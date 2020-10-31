const express = require('express');
const router = express.Router();

module.exports = ({ getCategories }) => {
  /* GET Events listing. */
  router.get('/', (req, res) => {
    getCategories()
      .then((cat) => res.json(cat))
      .catch((err) => res.json({ err }));
  });
  
  return router;
};
