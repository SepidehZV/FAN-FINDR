const express = require('express');
const router = express.Router();

module.exports = ({ addUserPatron }) => {
  /* Post UserPatron */
  router.post('/patron', (req, res) => {
    addUserPatron()
      .then((user) => res.json(user))
      .catch((err) => res.json({ err }));
  });

  // router.post('/owner',(req,res))=>{
  //   addUserOwner(req.param.first_name,
  //     req.body.last_name,
  //     req.param.username,
  //     req.param.user_zip_code,
  //     req.param.avatar_url,
  //     req.param.password, 
  //     req.param.owner_id, 
  //     req.param.venue_name, 
  //     req.param.street, 
  //     req.param.city, 
  //     req.param.province, 
  //     req.param.country, venue_zip_code, venue_description, phone, capacity, age_restriction, dress_code, venue_logo_url, category_id, cover_url)
  // }

  

  return router;
};