import { Order, Orders } from "../orders";

const store = new Orders();
const order: Order = { status: "active", user_id: 1 };

describe("Order Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have an show method", () => {
    expect(store.show).toBeDefined();
  });

  it("should have an create method", () => {
    expect(store.create).toBeDefined();
  });
  it("should have an addProduct method", () => {
    expect(store.addProduct).toBeDefined();
  });

  it("returns a list of orders", async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });
  it("show method should return the correct order", async () => {
    const result: Order = await store.show("1");
    expect(result).toEqual({
      id: 1,
      status: "active",
      user_id: 1,
    });
  });

  it("create method should add a order", async () => {
    const result: Order = await store.create(order);
    expect(result).toEqual({
      id: 2,
      status: "active",
      user_id: 1,
    });
  });

  it("should add a racket to the order", async () => {
    const result = await store.addProduct({
      quantity: 10,
      order_id: 1,
      racket_id: 1,
    });
    expect(result).toEqual({
      id: 2,
      quantity: 10,
      order_id: 1,
      racket_id: 1,
    });
  });
});
