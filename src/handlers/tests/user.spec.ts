import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;
describe("User Handler", () => {
  server = app.listen();

  it("should return a list of users when calling GET /users", async () => {
    const response = await request(server).get("/users");
    expect(response.status).toBe(200);
  });
  it("should return a specific user when calling GET /users/:id", async () => {
    const response = await request(server).get("/users/1");
    expect(response.status).toBe(200);
  });
  it("should create a user when calling POST /users", async () => {
    const response = await request(server).post("/users").send({
      firstname: "example",
      lastname: "name",
      username: "exampleUser",
      password: "examplePW",
    });
    expect(response.status).toBe(200);
  });
  server.close();
});
