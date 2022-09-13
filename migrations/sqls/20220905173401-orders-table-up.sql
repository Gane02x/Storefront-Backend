/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(100),
    user_id integer,
    CONSTRAINT fuser FOREIGN KEY(user_id) REFERENCES users(id)
);
INSERT INTO orders (status, user_id) VALUES ('active', 1);