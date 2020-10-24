const express = require('express');
const router = express.Router();

module.exports = ({ addUserPatron, getUserByEmail, addUserOwner, addVenue }) => {
  /* Get register UserPatron */
  router.get('/', function (req, res, next) {
    res.send("Entering Register")
  });
  /* Post UserPatron */
  router.post('/patron', (req, res) => {
    const { first_name, last_name, username, email, user_zip_code, password } = req.body;

    getUserByEmail(email)
      .then(existingUser => {       
        if (!existingUser) {
          return addUserPatron(first_name, last_name, username, email, user_zip_code, password)
            .then((user) => {
              res.json(user);
              console.log('user added');
            })
            .catch((err) => res.json({ err }));
        } else {
          res.status(401).send("User already exists")
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err)
      })
  });
  router.post('/venue', (req, res) => {
    const { first_name, last_name, username, email, password,
      venue_name, street, city, province, country, venue_zip_code } = req.body;
      
    getUserByEmail(email)
      .then(existingUser => {
        
        if (!existingUser) {
          addUserOwner(first_name, last_name, username, email, password)
            .then((data) => {
              // res.json(user)
              console.log("here");
              console.log(data[0].id);
              let owner_id = data[0].id;
              addVenue(owner_id,venue_name, street, city, province, country, venue_zip_code)
                .then(res => console.log('venue added'))
                .catch(err => console.log(err))
            })
            .catch((err) => res.json({ err }));
          
        } else {
          res.status(401).send("User already exists")
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err)
      })
  })



  return router;
};