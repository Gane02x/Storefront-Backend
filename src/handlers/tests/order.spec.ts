import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;

describe("Order Handler", () => {
  server = app.listen();

  it("should a list of orders when calling GET /orders", async () => {
    const response = await request(server).get("/orders");
    expect(response.status).toBe(200);
  });
  it("should a specific order when calling GET /orders/:id", async () => {
    const response = await request(server).get("/orders/1");
    expect(response.status).toBe(200);
  });
  it("should create an order when calling POST /orders", async () => {
    const response = await request(server).post("/orders").send({
      status: "active",
      user_id: 1,
    });
    expect(response.statusCode).toBe(200);
  });
  it("should add products to a specific order when calling POST /orders/:id/products", async () => {
    const response = await request(server).post("/orders/1/products").send({
      quantity: 10,
      order_id: 1,
      racket_id: 1,
    });
    expect(response.status).toBe(200);
  });
  server.close();
});
