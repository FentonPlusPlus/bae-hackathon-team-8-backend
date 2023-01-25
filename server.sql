CREATE TABLE points (
    id SERIAL PRIMARY KEY,
  	username TEXT,
    points INT
);


INSERT INTO points
    (username, points)
VALUES
  ('John', 0)