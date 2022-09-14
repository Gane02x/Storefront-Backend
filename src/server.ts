import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import tennis_rackets_routes from "./handlers/tennis_rackets";
import users_routes from "./handlers/users";
import order_routes from "./handlers/orders";

const app: express.Application = express();

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Tennisstore API");
});

tennis_rackets_routes(app);
users_routes(app);
order_routes(app);

export default app;
