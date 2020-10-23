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

  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content FROM users
             INNER JOIN posts
             ON users.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
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

  const addUser = (firstName, lastName, email, password) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password) 
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
      values: [firstName, lastName, email, password],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getVenues = () => {
    const query = {
      text: 'SELECT * FROM venues',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const getEvents = () => {
    const query = {
      text: 'SELECT * FROM events',
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

  const getTeamByEventId = (eventId) =>{
    const query = {
      text: `SELECT * FROM teams
        JOIN events ON teams.id = events.team_id
        WHERE events.id = $1`,
      values: [eventId],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);

  }

  return {
    getUsers,
    getUsersPosts,
    getUserByEmail,
    addUser,
    getVenues,
    getEvents,
    getSports,
    getTeams,
    getTeamByEventId
  };
};