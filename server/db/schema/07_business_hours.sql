DROP TABLE IF EXISTS business_hours CASCADE;

CREATE TABLE business_hours (
  
  id SERIAL PRIMARY KEY NOT NULL,
  venue_id INTEGER REFERENCES venues(id) ON DELETE CASCADE,
  day VARCHAR(255) NOT NULL,
  open_time TIME NOT NULL,
  close_time TIME NOT NULL

);