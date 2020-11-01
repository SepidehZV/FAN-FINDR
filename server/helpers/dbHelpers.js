const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
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
      values: [id],
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

  const editUserById = (id, first_name,last_name, username, email, user_zip_code, avatar_url) => {
    
    const query = {
      text: `UPDATE users SET first_name = $1,last_name = $2,username = $3,
        email = $4,user_zip_code = $5, avatar_url = $6
        WHERE id = $7  RETURNING *`,
      values: [first_name,last_name,username,email,user_zip_code, avatar_url, id],
    };
    console.log(query);
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => console.log(err));
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

      values: [
        first_name,
        last_name,
        username,
        email,
        bcrypt.hashSync(password, saltRounds),
      ],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addVenue = (
    owner_id,
    venue_name,
    street,
    city,
    province,
    country,
    venue_zip_code
  ) => {
    const query = {
      text: `INSERT INTO
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
      values: [
        owner_id,
        venue_name,
        street,
        city,
        province,
        country,
        venue_zip_code,
      ],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const addNewEvent = (
    event_name,
    event_description,
    offers,
    team_id,
    venue_id
  ) => {
    const query = {
      text: `INSERT INTO
      events ( event_name, event_description, offers, team_id,venue_id)
      VALUES
      ($1, $2, $3, $4,$5)
      RETURNING *;`,

      values: [event_name, event_description, offers, team_id, venue_id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
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
  const addNewMenuItems = (item_name, price, item_description, venue_id) => {
    const query = {
      text: `INSERT INTO
      menu_items
      (
        item_name, price,item_description,venue_id  
      )
    VALUES 
      ( $1, $2, $3, $4 )
      RETURNING *;`,

      values: [item_name, price, item_description, venue_id],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const eidtMenuItems = (id, item_name, price, item_description, venue_id) => {
    const query = {
      text: `UPDATE menu_items 
      SET item_name = $1, price= $2, item_description = $3
              WHERE id = $4 AND venue_id = $5  RETURNING *;`,

      values: [item_name, price, item_description, id, venue_id],
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  const addNewFavouriteEvent = (user_id, event_id, created_at) => {
    const query = {
      text: `INSERT INTO
      favourite_events
      (
      user_id ,
      event_id ,
      created_at
      )
    VALUES 
    ($1,$2,$3)
      RETURNING *;`,

      values: [user_id, event_id, created_at],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getBussniessHours = (venue_id) => {
    const query = {
      text: `SELECT business_hours.id,day,open_time,close_time 
      FROM business_hours 
      JOIN venues ON venue_id = venues.id 
      WHERE venues.id = $1;
      `,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
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
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getAllMenues = () => {
    const query = {
      text: `SELECT menu_items.* FROM menu_items;`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
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
      text: `SELECT photos.id as photo_id ,photo_url  FROM photos
      JOIN venues ON venue_id = venues.id 
      WHERE venues.id = $1;      
      `,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addUserPatron = (
    first_name,
    last_name,
    username,
    email,
    user_zip_code,
    password
  ) => {
    const query = {
      text: `INSERT INTO
      users(first_name,last_name,username,email, user_zip_code, user_type,password)
    VALUES
      (
        $1,$2,$3,$4,$5,false,$6
      )
             RETURNING *`,
      values: [
        first_name,
        last_name,
        username,
        email,
        user_zip_code,
        bcrypt.hashSync(password, saltRounds),
      ],
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

  const getVenueById = (id) => {
    const query = {
      text: `SELECT
      venues.id
      owner_id,
      venue_name, 
      street,
      city,
      province,
      country,
      venue_zip_code,
      venue_description,
      phone,
      venue_email,
      capacity,
      age_restriction,
      dress_code,
      venue_logo_url,
      cover_url,  
      venue_categories.categorie_name 
      FROM venues
   JOIN venue_categories ON venue_categories.id = venues.category_id
      WHERE venues.id = $1
      GROUP BY venues.id, venue_categories.categorie_name;`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getVenues = () => {
    const query = {
      text: "SELECT * FROM venues;",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getEvents = () => {
    const query = {
      text: `SELECT events.id, events.event_name, teams.team_name, teams.team_logo_url, events.offers, events.start_date :: date, events.end_date :: date, events.venue_id, events.event_description, events.team_id,venues.venue_name ,sport_name , venues.venue_logo_url
      FROM events
      JOIN teams ON teams.id = team_id
      JOIN venues ON events.venue_id = venues.id
      JOIN sports ON sports.id = sport_id
      ORDER BY events.start_date;`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const deleteEvent = (id, venuId) => {
    const query = {
      text: `DELETE FROM events WHERE id = $1 AND venue_id = $2 ;`,
      values: [id, venuId],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const editEvent = (
    event_name,
    event_description,
    offers,
    team_id,
    venue_id,
    eventId
  ) => {
    const query = {
      text: `UPDATE events 
      SET  
      event_name = $1,
      event_description = $2,
      offers =$3,
      team_id =$4
      WHERE venue_id = $5  AND id = $6 RETURNING *;`,
      values: [
        event_name,
        event_description,
        offers,
        team_id,
        venue_id,
        eventId
      ],
    };
    console.log(query);
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => console.log(err));
  };

  const deleteMenuItem = (id, venuId) => {
    const query = {
      text: `DELETE FROM menu_items WHERE id = $1 AND venue_id = $2 ;`,
      values: [id, venuId],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getSports = () => {
    const query = {
      text: "SELECT * FROM sports",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getTeams = () => {
    const query = {
      text: "SELECT * FROM teams",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getFavouritesEventsByUserId = (id) => {
    const query = {
      text: `SELECT * FROM favourite_events 
      WHERE user_id = $1;`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const removeFavouriteEventById = (id) => {
    const query = {
      text: `DELETE * FROM favourite_events 
      WHERE id = $1;`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getFavouritesEventsCountForDayByVenueId = (venue_id) => {
    const query = {
      text: `SELECT count(*) as  favourites_number , venues.id as venue_id , created_at::date as day
      FROM favourite_events 
      JOIN events on event_id = events.id 
      JOIN venues ON venues.id = venue_id
      WHERE venues.id = $1
      Group by created_at ,venues.id;`,
      values: [venue_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getEventFavForDayByEventId = (event_id) => {
    const query = {
      text: `SELECT count(*) as  favourites_number , events. event_name as events_name , created_at::date as day
      FROM favourite_events 
      JOIN events on event_id = events.id 
      WHERE events.id = $1
      Group by created_at ,events.id
      ORDER BY day;`,
      values: [event_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const addSport = (sport_name, photo_url) => {
    const query = {
      text: `INSERT INTO sports (sport_name,photo_url) 
        VALUES ($1, $2) RETURNING *`,
      values: [sport_name, photo_url],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const searchForEvent = (name) => {
    const query = {
      text: `SELECT events.id, teams.team_name, teams.team_logo_url, events.offers, events.start_date, events.end_date, events.venue_id, events.event_description, events.team_id, venue_name, venue_logo_url,sport_name
      FROM sports 
      JOIN teams ON sports.id = teams.sport_id 
      JOIN events ON teams.id = team_id
      JOIN venues ON venues.id = venue_id
      WHERE venue_name like $1  OR sports.sport_name like $1  OR teams.team_name like $1 ;`,
      values: [`%${name}%`],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const editHours = (day, open_time, close_time, venue_id) => {
    const query = {
      text: `UPDATE business_hours SET  open_time =$1 ,close_time = $2
        WHERE venue_id = $3  AND day = $4 RETURNING *;`,
      values: [open_time, close_time, venue_id, day],
    };
    console.log(query);
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => console.log(err));
  };

  const editVenueById = (
    id,
    venue_name,
    street,
    country,
    venue_zip_code,
    province,
    venue_description,
    phone,
    venue_email,
    capacity,
    age_restriction,
    dress_code,
    category_id,
    city
  ) => {
    const query = {
      text: `UPDATE venues SET  venue_name = $1 ,street =$2, country=$3, venue_zip_code = $4, province = $5, venue_description =$6, phone= $7,venue_email=$8, capacity=$9, age_restriction= $10, dress_code =$11, category_id=$12, city= $13
      WHERE id = $14 RETURNING *;`,
      values: [
        venue_name,
        street,
        country,
        venue_zip_code,
        province,
        venue_description,
        phone,
        venue_email,
        capacity,
        age_restriction,
        dress_code,
        category_id,
        city,
        id,
      ],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => console.log(err));
  };
  const getCategories = () => {
    const query = {
      text: "SELECT * FROM venue_categories;",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getCategories,
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
    getFavouritesEventsByUserId,
    getFavouritesEventsCountForDayByVenueId,
    getEventFavForDayByEventId,
    addSport,
    searchForEvent,
    editUserById,
    removeFavouriteEventById,
    deleteMenuItem,
    eidtMenuItems,
    getAllMenues,
    editHours,
    editVenueById,
    deleteEvent,
    editEvent,
  };
};
