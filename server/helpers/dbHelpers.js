const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: 'SELECT * FROM users',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserById = (id) => {
    const query = {
      text: `SELECT * FROM users
             WHERE id = $1`,
      values: [id]
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };



  const addUserOwner = (first_name, last_name, username, email, password) => {
    const query = {
      text: `INSERT INTO
        users( first_name, last_name, username, email,user_type, password
        )
      VALUES
        (
          $1,$2,$3,$4,true,$5
        )
        RETURNING id;`,

      values: [first_name, last_name, username, email, bcrypt.hashSync(password, saltRounds)],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  };

  const addVenue = (owner_id, venue_name, street, city, province, country, venue_zip_code) => {
    const query = {
      text: `INSERT INTO
      venues (
        owner_id,
        venue_name, 
        street,
        city,
        province,
        country,
        venue_zip_code,
        
      ) 
    VALUES
      (
        $1,$2,$3,$4,$5,$6,$7
      )
             RETURNING *`,
      values: [owner_id, venue_name, street, city, province, country, venue_zip_code],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  }
  const addNewEvent = (event_name, event_description, offers, start_date, end_date,venue_id, team_id) => {
    const query = {
      text: `INSERT INTO
      events ( event_name, event_description, offers, start_date, end_date, venue_id, team_id )
      VALUES
      ($1, $2, $3, $4,$5,$6,$7)
      RETURNING *;`,

      values: [event_name, event_description, offers, start_date, end_date,venue_id, team_id],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  };
  const addNewPhoto = (photo_url, venue_id) => {
    const query = {
      text: `IINSERT INTO
      photos
      ( photo_url , venue_id )
    VALUES
      ($1,$2)
      RETURNING *;`,

      values: [photo_url, venue_id],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  };
  const addNewMenuItems = (item_name, price,item_description,venue_id) => {
    const query = {
      text: `INSERT INTO
      menu_items
      (
      item_name , price , item_description, venue_id  
      )
    VALUES 
      ( $1, $2, $3, $4 )
      RETURNING *;`,

      values: [item_name, price,item_description,venue_id],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  };
  const addNewFavouriteEvent = (user_id, event_id,created_at) => {
    const query = {
      text: `INSERT INTO
      favourite_events
      (
      user_id ,
      event_id ,
      created_at
      )
    VALUES 
    ($1,$2, $3)
      RETURNING *;`,

      values: [user_id, event_id,created_at],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  };

  const getBussniessHours = (venue_id) => {
    const query = {
      text: `SELECT business_hours.* FROM business_hours 
      JOIN venues ON venue_id = venues.id 
      WHERE venues.id = $1;
      `,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getMenuItems = (venue_id) => {
    const query = {
      text: `SELECT menu_items.* FROM menu_items
      JOIN venues ON venue_id = venues.id 
      WHERE venues.id =  $1;      
      `,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  
  const getVenueCategories = (venue_id) => {
    const query = {
      text: `SELECT categorie_name FROM venue_categories
      JOIN venues ON category_id = venue_categories.id 
      WHERE venues.id = $1;      
      `,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  const getPhotos = (venue_id) => {
    const query = {
      text: `SELECT * FROM photos
      JOIN venues ON venue_id = venues.id 
      WHERE venues.id = $1;      
      `,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUserPatron = (first_name, last_name, username, email, user_zip_code, password) => {
    const query = {
      text: `INSERT INTO
      users(first_name,last_name,username,email, user_zip_code, user_type,password)
    VALUES
      (
        $1,$2,$3,$4,$5,false,$6
      )
             RETURNING *`,
      values: [first_name, last_name, username, email, user_zip_code, bcrypt.hashSync(password, saltRounds)],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserType = (id) => {
    const query = {
      text: `SELECT user_type FROM users WHERE id = $1`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };


  const getVenueById =(id) =>{
    const query = {
      text: 'SELECT * FROM venues WHERE id = $1',
      values :[id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  const getVenues = () => {
    const query = {
      text: 'SELECT * FROM venues JOIN users on users.id = owner_id',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getEvents = () => {
    const query = {
      text: `Select *  from events JOIN venues on events.venue_id = venues.id
      Join teams on events.team_id = teams.id
      ORDER BY events.start_date;`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getSports = () => {
    const query = {
      text: 'SELECT * FROM sports',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getTeams = () => {
    const query = {
      text: 'SELECT * FROM teams',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getFavouritesEvents = () =>{
    const query = {
      text: 'SELECT * FROM favourite_events;',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmail,
    addUserPatron,
    getVenues,
    getEvents,
    getSports,
    getTeams,
    getUserById,
    getUserType,
    addUserOwner,
    addVenue,
    getMenuItems,
    getBussniessHours,
    getPhotos,
    getVenueCategories,
    addNewEvent,
    addNewPhoto,
    addNewMenuItems,
    addNewFavouriteEvent,
    getVenueById,
    getFavouritesEvents
  };
};