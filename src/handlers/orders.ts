import express, { Response, Request } from "express";
import { Order, Orders, OrderProducts } from "../models/orders";
import { authorization } from "../middleware/authorization";

const store = new Orders();

const index = async (req: Request, res: Response) => {
  const orders = await store.index();
  res.json(orders);
};

const show = async (req: Request, res: Response) => {
  const order = await store.show(req.params.id);
  res.json(order);
};

const create = async (req: Request, res: Response) => {
  const order: Order = {
    status: req.body.status,
    user_id: req.body.user_id,
  };
  try {
    const newOrder = await store.create(order);
    res.json(newOrder);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const addProduct = async (req: Request, res: Response) => {
  const updatedOrder: OrderProducts = {
    quantity: req.body.quantity,
    order_id: Number(req.params.order_id),
    racket_id: req.body.racket_id,
  };
  try {
    const addedProduct = await store.addProduct(updatedOrder);
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
const order_routes = (app: express.Application) => {
  app.get("/orders", authorization, index);
  app.get("/orders/:id", authorization, show);
  app.post("/orders", authorization, create);
  app.post("/orders/:order_id/products", authorization, addProduct);
};

export default order_routes;
