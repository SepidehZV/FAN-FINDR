DROP TABLE IF EXISTS venue_categories CASCADE;

CREATE TABLE venue_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  categorie_name VARCHAR(225) NOT NULL
);