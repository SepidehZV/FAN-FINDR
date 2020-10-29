const express = require('express');
const router = express.Router();




module.exports = ({ getUsers, getUserById,editUserById }) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) => res.json({ err }));
  });
  
  // router.get('/posts/', (req, res) => {
  //   getUsersPosts()
  //     .then((users) => res.json(getPostsByUsers(users)))
  //     .catch((err) => res.json({ err }));
  // });
  
  router.get('/:id',(req,res) =>{
    getUserById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json({ err }));
  });
  
  router.put('/:id', (req, res) => {
    const {first_name,last_name, username, email, user_zip_code } = req.body;
    console.log(req.body);


    editUserById(req.params.id, first_name,last_name, username, email, user_zip_code ) 
      .then((user) => res.json(user))
      .catch((err) => res.json({ err }));
  })
  return router;
  
};
