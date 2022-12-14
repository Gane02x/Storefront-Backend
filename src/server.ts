import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import tennis_rackets_routes from "./handlers/tennis_rackets";
import users_routes from "./handlers/users";
import order_routes from "./handlers/orders";

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Tennisstore API");
});

tennis_rackets_routes(app);
users_routes(app);
order_routes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
