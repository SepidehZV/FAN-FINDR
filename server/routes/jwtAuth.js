const express = require("express");
const router = express.Router();
//const pool = require("../db");
const bcrypt = require('bcrypt');
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorize = require("../middleware/authorize");

const client = require("../db/index.js");




/* registration for patron */

router.post("/patron", validInfo, async (req, res) => {
  const { first_name, last_name, username, email, user_zip_code, password } = req.body;

  try {

    const user = await client.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if (user.rows.length > 0) {
      return res.status(401).send("User already exist.");
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await client.query(
      `INSERT INTO
users(first_name,last_name,username,email, user_zip_code, user_type,password)
VALUES
(
$1,$2,$3,$4,$5,false,$6
)
RETURNING *`,
      [first_name, last_name, username, email, user_zip_code, bcryptPassword]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].id);

    return res.json({ jwtToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});




/* registration for owner */
router.post("/owner", validInfo, async (req, res) => {
  const { first_name, last_name, username, email, password,
    venue_name, street, city, province, country, venue_zip_code } = req.body;

  try {
    
  

    const user = await client.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);
    if (user.rows.length > 0) {
      return res.status(401).send("User already exist.");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const newUser = await client.query(
      `INSERT INTO
      users( first_name, last_name, username, email,user_type, password
      )
      VALUES
      (
      $1,$2,$3,$4,true,$5
      )
      RETURNING id;`,
      [first_name, last_name, username, email, bcryptPassword]
    )
    

    /*add new venue*/
    const newVenue =  await client.query(
      `INSERT INTO
      venues (
        owner_id,
        venue_name, 
        street,
        city,
        province,
        country,
        venue_zip_code
      ) 
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7
      )
      RETURNING *`,
      [newUser.rows[0].id, venue_name, street, city, province, country, venue_zip_code ]
    )



    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});





//login route

router.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  try {


    const user = await client.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );
    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }


    const token = jwtGenerator(user.rows[0].id);
    res.json({ user:user.rows[0], token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/verify", authorize, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;





