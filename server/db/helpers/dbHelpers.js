const dbHelpers = db => {

  const getUsers = () => {
    const query = {
      text : ` SELECT * FROM  users`
    }
    return db.query(query)
    .then(reault => result.rows)
    .catch(err => err.message);
  };
  return {
    getUsers 
  }
};

module.export dbHelpers;