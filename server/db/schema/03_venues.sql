DROP TABLE IF EXISTS venues CASCADE;

CREATE TABLE venues (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  zip_code VARCHAR(20) NOT NULL,
  province VARCHAR(255) NOT NULL,
  description TEXT,
  phone VARCHAR(20),
  capacity INTEGER,
  age_restriction  INTEGER,
  dress_code VARCHAR(255),
  logo_url TEXT,
  category_id INTEGER REFERENCES venue_categories(id) ON DELETE CASCADE,
  cover_url TEXT,
  city VARCHAR(255)
);