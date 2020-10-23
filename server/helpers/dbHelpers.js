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
  const addUserOwner = (first_name, last_name, username, user_zip_code, avatar_url, password, owner_id, venue_name, street, city, province, country, venue_zip_code, venue_description, phone, capacity, age_restriction, dress_code, venue_logo_url, category_id, cover_url) => {
    const query = {
      text: `INSERT INTO
        users( first_name, last_name, username, email, avatar_url,user_type, password
        )
      VALUES
        (
          $1,$2,$3,$4,$5,true,$6
        );INSERT INTO
        venues (owner_id,venue_name,street,city,province,country,venue_zip_code, venue_description, phone,capacity,age_restriction, dress_code,venue_logo_url, category_id,cover_url
        )
      VALUES
      (
        $7,$8, $9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21
      );
               RETURNING *`,

      values: [first_name, last_name, username, user_zip_code, avatar_url, password, owner_id, venue_name, street, city, province, country, venue_zip_code, venue_description, phone, capacity, age_restriction, dress_code, venue_logo_url, category_id, cover_url],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  }
  const addUserPatron = (first_name, last_name, username, user_zip_code, avatar_url, password) => {
    const query = {
      text: `INSERT INTO
      users(first_name,last_name,username,email, user_zip_code,avatar_url, user_type,password)
    VALUES
      (
        $1,$2,$3,$4,$5,$6,false,$7
      )
             RETURNING *`,
      values: [first_name, last_name, username, user_zip_code, avatar_url, password],
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
    addUserOwner
  };
};