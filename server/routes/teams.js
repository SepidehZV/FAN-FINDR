const express = require('express');
const router = express.Router();

module.exports = ({ getTeams, getTeamByEventId }) => {
  /* GET Teams listing. */
  router.get('/', (req, res) => {
    getTeams()
      .then((teams) => res.json(teams))
      .catch((err) => res.json({ err }));
  });

  

  return router;
};