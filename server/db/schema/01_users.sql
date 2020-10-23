DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_zip_code VARCHAR(20),
  avatar_url text,
  user_type BOOLEAN NOT NULL,
  password VARCHAR(255) NOT NULL
);