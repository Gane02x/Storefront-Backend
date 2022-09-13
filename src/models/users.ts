//@ts-ignore
import client from "../database";

export type User = {
  id?: Number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

export class Users {
  async index(): Promise<User[]> {
    try {
      const sql = "SELECT * FROM users";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get any users ${error}`);
    }
  }
  async show(id: string): Promise<User> {
    try {
      const sql = "SELECT * FROM users WHERE id=($1)";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find User ${id}. Error: ${error}`);
    }
  }
  async create(u: User): Promise<User> {
    try {
      const sql =
        "INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *";
      //@ts-ignore
      const conn = await client.connect();
      const result = await conn.query(sql, [
        u.firstname,
        u.lastname,
        u.username,
        u.password,
      ]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (error) {
      throw new Error(`Unable to create user (${u.username}): ${error}`);
    }
  }
}
