import mysql from "mysql2";
import "dotenv/config";

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conexao.connect((err) => {
  if (err) {
    console.error("Erro ao conectar:", err);
    return;
  }

  console.log("MySQL conectado");
});

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql string sql a ser executada
 * @param {array []} valores
 * @param {string} mensagemReject mensagem exibida do reject
 * @returns objeto da Promisse
 */
export const consulta = (
  sql,
  valores = [],
  mensagemReject = "Erro na consulta",
) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, resultado) => {
      if (error) {
        return reject({
          mensagem: mensagemReject,
          erroOriginal: error,
        });
      }

      return resolve(resultado);
    });
  });
};

export default conexao;
