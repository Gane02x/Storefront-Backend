//@ts-ignore
import client from "../database";

export type Racket = {
  id?: Number;
  brand: string;
  model: string;
  description: string;
  price: number;
};

export class TennisRacketStore {
  async index(): Promise<Racket[]> {
    try {
      const sql = "SELECT * FROM tennis_rackets";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get any rackets ${error}`);
    }
  }
  async show(id: string): Promise<Racket> {
    try {
      const sql = "SELECT * FROM tennis_rackets WHERE id=($1)";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find Racket ${id}. Error: ${error}`);
    }
  }
  async create(r: Racket): Promise<Racket> {
    try {
      const sql =
        "INSERT INTO tennis_rackets (brand, model, description, price) VALUES ($1, $2, $3, $4) RETURNING *";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [
        r.brand,
        r.model,
        r.description,
        r.price,
      ]);
      const racket = result.rows[0];
      conn.release();
      return racket;
    } catch (error) {
      throw new Error(
        `Could not add new Racket ${r.brand} ${r.model}. Error: ${error}`
      );
    }
  }
}
