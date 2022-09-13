## API Endpoints

#### Rackets

- Index GET "/rackets"
- Show GET "/rackets/:id"
- Create POST "/rackets" [TOKEN REQUIRED]

#### Users

- Index GET "/users" [TOKEN REQUIRED]
- Show GET "/users/:id" [TOKEN REQUIRED]
- Create POST "/users"

#### Orders

- Index GET "/orders" [TOKEN REQUIRED]
- Show GET "/orders/:id" [TOKEN REQUIRED]
- Create POST "/orders" [TOKEN REQUIRED]
- AddProduct POST "/orders/:id/products [TOKEN REQUIRED]

## Data Shapes

#### Rackets

- id SERIAL PRIMARY KEY,
- brand VARCHAR(30),
- model VARCHAR(100),
- description TEXT,
- price integer;

#### User

- id SERIAL PRIMARY KEY,
- firstname VARCHAR(30),
- lastname VARCHAR(30),
- username VARCHAR(30),
- password VARCHAR;

#### Orders

- id SERIAL PRIMARY KEY,
- status VARCHAR(100),
- user_id integer,
- CONSTRAINT fuser FOREIGN KEY(user_id) REFERENCES users(id)

#### OrderProduct

- id SERIAL PRIMARY KEY,
- quantity integer,
- order_id integer,
- racket_id integer,
- CONSTRAINT forder FOREIGN KEY (order_id) REFERENCES orders(id),
- CONSTRAINT fracket FOREIGN KEY (racket_id) REFERENCES tennis_rackets(id)
