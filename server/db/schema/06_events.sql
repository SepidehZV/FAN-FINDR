DROP TABLE IF EXISTS events CASCADE;
CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  event_name VARCHAR(255) NOT NULL,
  event_description TEXT NOT NULL,
  offers VARCHAR(255),
  start_date DATE ,
  end_date DATE,
  venue_id INTEGER REFERENCES venues(id) ON DELETE CASCADE,
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE
);