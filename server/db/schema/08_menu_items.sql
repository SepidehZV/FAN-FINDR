DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE menu_items (

  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(225) NOT NULL,
  price MONEY NOT NULL,
  item_description TEXT,
  venue_id INTEGER REFERENCES venues(id) ON DELETE CASCADE

);