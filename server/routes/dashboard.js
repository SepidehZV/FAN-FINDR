const router = require("express").Router();
const authorize = require("../middleware/authorize");
const client = require("../db/index.js");

router.get("/dashboard", authorize, async (req, res) => {
  try {
    const user = await client.query(
      "SELECT username FROM users WHERE id = $1",
      [req.user] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;