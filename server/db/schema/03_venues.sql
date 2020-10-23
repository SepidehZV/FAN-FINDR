DROP TABLE IF EXISTS venues CASCADE;

CREATE TABLE venues (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  venue_name VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  venue_zip_code VARCHAR(20) NOT NULL,
  province VARCHAR(255) NOT NULL,
  venue_description TEXT,
  phone VARCHAR(20),
  capacity INTEGER,
  age_restriction  INTEGER,
  dress_code VARCHAR(255),
  venue_logo_url TEXT,
  category_id INTEGER REFERENCES venue_categories(id) ON DELETE CASCADE,
  cover_url TEXT,
  city VARCHAR(255)
);