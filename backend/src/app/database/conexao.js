import pkg from "pg";
const { Pool } = pkg;

import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql string sql a ser executada
 * @param {array []} valores
 * @param {string} mensagemReject mensagem exibida do reject
 * @returns objeto da Promisse
 */

export async function consulta(sql, valores = []) {
  try {
    const { rows } = await pool.query(sql, valores);
    return rows;
  } catch (error) {
    throw error;
  }
}

export default pool;
