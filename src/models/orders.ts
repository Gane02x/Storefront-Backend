//@ts-ignore
import client from "../database";

export type Order = {
  id?: number;
  status: string;
  user_id: number;
};

export type OrderProducts = {
  id?: number;
  quantity: number;
  order_id: number;
  racket_id: number;
};

export class Orders {
  async index(): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get any orders ${error}`);
    }
  }
  async show(id: string): Promise<Order> {
    try {
      const sql = "SELECT * FROM orders WHERE id=($1)";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find Order ${id}. Error: ${error}`);
    }
  }
  async create(o: Order): Promise<Order> {
    try {
      const sql =
        "INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [o.status, o.user_id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Unable to complete order (${o.id}): ${error}`);
    }
  }
  async addProduct(p: OrderProducts): Promise<OrderProducts> {
    try {
      const sql =
        "INSERT INTO order_products (quantity, order_id, racket_id) VALUES ($1, $2, $3) RETURNING *";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [
        p.quantity,
        p.order_id,
        p.racket_id,
      ]);
      const orderProduct = result.rows[0];
      conn.release();
      return orderProduct;
    } catch (error) {
      throw new Error(
        `Could not add racket ${p.racket_id} to order ${p.order_id}: ${error}`
      );
    }
  }
}
