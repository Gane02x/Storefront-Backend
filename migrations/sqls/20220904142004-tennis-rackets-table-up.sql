/* Replace with your SQL commands */
CREATE TABLE tennis_rackets(
    id SERIAL PRIMARY KEY,
    brand VARCHAR(30),
    model VARCHAR(100),
    description TEXT,
    price integer);
    
INSERT INTO tennis_rackets (brand, model, description, price) VALUES ('Wilson', 'Blade 98', 'Weight: 305g, String-pattern: 16/19', 90);