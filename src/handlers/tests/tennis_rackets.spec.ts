import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;
describe("TennisRacket Handler", () => {
  server = app.listen();

  it("should return a list of rackets when calling GET /rackets", async () => {
    const response = await request(server).get("/rackets");
    expect(response.status).toBe(200);
  });
  it("should return a specific racket when calling GET /rackets/:id", async () => {
    const response = await request(server).get("/rackets/1");
    expect(response.status).toBe(200);
  });
  it("should create a racket when calling POST /rackets", async () => {
    const response = await request(server).post("/rackets").send({
      firstname: "example",
      lastname: "name",
      username: "exampleUser",
      password: "examplePW",
    });
    expect(response.status).toBe(200);
  });
  server.close();
});
