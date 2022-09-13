/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    username VARCHAR(30),
    password VARCHAR);

INSERT INTO users (firstname, lastname, username, password) VALUES ('Gabor', 'Nemeth', 'gane02x', 'password123');