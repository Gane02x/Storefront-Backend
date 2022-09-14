import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;

describe("Order Handler", () => {
  server = app.listen();

  it("should return an error when calling GET /orders without token", async () => {
    const response = await request(server).get("/orders");
    expect(response.status).toBe(401);
  });
  it("should return a error when calling GET /orders/:id without token", async () => {
    const response = await request(server).get("/orders/1");
    expect(response.status).toBe(401);
  });
  it("should return an error when calling POST /orders without token", async () => {
    const response = await request(server).post("/orders").send({
      status: "active",
      user_id: 1,
    });
    expect(response.statusCode).toBe(401);
  });
  it("should return an error when calling POST /orders/:id/products without token", async () => {
    const response = await request(server).post("/orders/1/products").send({
      quantity: 10,
      order_id: 1,
      racket_id: 1,
    });
    expect(response.status).toBe(401);
  });
  server.close();
});
