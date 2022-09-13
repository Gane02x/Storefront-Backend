/* Replace with your SQL commands */
CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id integer,
    racket_id integer,
    CONSTRAINT forder FOREIGN KEY (order_id) REFERENCES orders(id),
    CONSTRAINT fracket FOREIGN KEY (racket_id) REFERENCES tennis_rackets(id)
);
INSERT INTO order_products (quantity, order_id, racket_id) VALUES (10, 1, 1);