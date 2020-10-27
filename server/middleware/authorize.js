 
const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = async(req, res, next) =>{
  try {

    const jwtToken = req.header("token");

    if (!jwtToken){
    return res.status(403).json("Not Authorize")

    }


    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;
    next();
  } catch (err) {
    return res.status(401).json("Not Authorize" );
  }

}; 