import express, { Request, Response } from "express";
import { Racket, TennisRacketStore } from "../models/tennis_rackets";
import { authorization } from "../middleware/authorization";

const store = new TennisRacketStore();

const index = async (_req: Request, res: Response) => {
  const rackets = await store.index();
  try {
    res.json(rackets);
  } catch (error) {
    res.json(error);
  }
};

const show = async (req: Request, res: Response) => {
  const racket = await store.show(req.params.id);
   try {
    res.json(racket);
  } catch (error) {
    res.json(error);
  }
};

const create = async (req: Request, res: Response) => {
  const racket: Racket = {
    brand: req.body.brand,
    model: req.body.model,
    description: req.body.description,
    price: req.body.price,
  };
  try {
    const newRacket = await store.create(racket);
    res.json(newRacket);
  } catch (error) {
    res.status(401);
    res.json(error);
  }
};

const tennis_rackets_routes = (app: express.Application) => {
  app.get("/rackets", index);
  app.get("/rackets/:id", show);
  app.post("/rackets", authorization, create);
};

export default tennis_rackets_routes;
