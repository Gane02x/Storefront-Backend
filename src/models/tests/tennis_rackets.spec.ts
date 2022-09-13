import { TennisRacketStore } from "../tennis_rackets";

const store = new TennisRacketStore();

describe("TennisRacket Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have an show method", () => {
    expect(store.show).toBeDefined();
  });

  it("should have an create method", () => {
    expect(store.create).toBeDefined();
  });

  it("returns a list of rackets", async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it("create method should add a racket", async () => {
    const result = await store.create({
      brand: "Wilson",
      model: "ProStaff 97L",
      description: "amazing racket for beginners",
      price: 200,
    });
    expect(result).toEqual({
      id: 2,
      brand: "Wilson",
      model: "ProStaff 97L",
      description: "amazing racket for beginners",
      price: 200,
    });
  });

  it("show method should return the correct racket", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      brand: "Wilson",
      model: "Blade 98",
      description: "Weight: 305g, String-pattern: 16/19",
      price: 90,
    });
  });
});
