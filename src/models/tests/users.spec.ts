import { Users } from "../users";

const store = new Users();

describe("User Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have an show method", () => {
    expect(store.show).toBeDefined();
  });

  it("should have an create method", () => {
    expect(store.create).toBeDefined();
  });

  it("returns a list of users", async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it("show method should return the correct user", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      firstname: "Gabor",
      lastname: "Nemeth",
      username: "gane02x",
      password: "password123",
    });
  });

  it("create method should add a user", async () => {
    const result = await store.create({
      firstname: "Roger",
      lastname: "Federer",
      username: "RF1",
      password: "RogerOnTop",
    });
    expect(result).toEqual({
      id: 2,
      firstname: "Roger",
      lastname: "Federer",
      username: "RF1",
      password: "RogerOnTop",
    });
  });
});
