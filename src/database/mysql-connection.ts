import mysql, { Pool, createPool } from 'mysql2/promise';

export class MySqlConnection {
  private pool: Pool;

  constructor() {
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'mysqlroot',
      database: 'chinafy',
    });
  }

  async query(sql: string, values?: any[]): Promise<any> {
    const connection = await this.pool.getConnection();
    try {
      const [results] = await connection.query(sql, values);
      return results;
    } finally {
      connection.release();
    }
  }

  async end(): Promise<void> {
    await this.pool.end();
  }
}
