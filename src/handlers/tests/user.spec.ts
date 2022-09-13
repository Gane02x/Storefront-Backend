import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;

describe("User Handler", () => {
  server = app.listen();

  it("should return an error when calling GET /users without token", async () => {
    const response = await request(server).get("/users");
    expect(response.status).toBe(401);
  });
  it("should return an error when calling GET /users/:id without token", async () => {
    const response = await request(server).get("/users/1");
    expect(response.status).toBe(401);
  });
  it("should create a user when calling POST /users", async () => {
    const response = await request(server).post("/users").send({
      firstname: "example",
      lastname: "name",
      username: "exampleUser",
      password: "examplePW",
    });
    expect(response.statusCode).toBe(200);
  });
  server.close();
});
