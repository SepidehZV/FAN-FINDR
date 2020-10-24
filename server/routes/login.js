const express = require('express');
const router = express.Router();
const { checkPassword } = require('../helpers/loginHelper');

module.exports = ({ getUserByEmail }) => {

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.send("Entering login")
  });
  /* login */
  router.post('/', (req, res) => {
    const { email, password } = req.body
    getUserByEmail(email)
      .then((data) => {
        const user = data[0];
        if (user) {
          checkPassword(password, user)
            .then(result => {
              if (result) {
                //set Session
                req.session['user_id'] = user['id']
                let userObject = {
                  id: user['id'],
                  first_name: user['firstname'],
                  last_name: user['lastname'],
                  username: user['username'],
                  email: user['email'],
                  user_type: user['user_type']
                };
                res.json(userObject)
                // if (user_type) {
                //   res.redirect('/home/venue');
                //   // res.render() i think we can rnder 
                // } else {
                //   res.redirect('/home/user')
                // }
                
                //res.json(req.session['user_id'])
              } else {
                res.status(401);
                res.json({ error: "Password Incorrect" })
              }
            })
        }

      })
      .catch((err) => res.json({ err }));
  });




  return router;
};