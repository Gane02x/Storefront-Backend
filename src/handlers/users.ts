import express, { Request, Response } from "express";
import { User, Users } from "../models/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authorization } from "../middleware/authorization";

const store = new Users();

const index = async (_req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
};

const show = async (req: Request, res: Response) => {
  const user = await store.show(req.params.id);
  res.json(user);
};
const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
    };

    const hash = bcrypt.hashSync(
      user.password + String(process.env.BCRYPT_PW),
      Number(process.env.SALT_ROUNDS)
    );
    user.password = hash;

    const newUser = await store.create(user);
    const token = jwt.sign({ user: newUser }, String(process.env.TOKEN_SECRET));
    res.status(200).json(token);
  } catch (error) {
    res.status(401);
    res.json(`Invalid token ${error}`);
  }
};

const users_routes = (app: express.Application) => {
  app.get("/users", authorization, index);
  app.get("/users/:id", authorization, show);
  app.post("/users", create);
};
export default users_routes;
