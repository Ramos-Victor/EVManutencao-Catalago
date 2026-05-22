import { consulta } from "../database/conexao.js";

class AdminRepository {
  login(nome) {
    const sql = `
      SELECT * FROM tb_admin
      WHERE nome = $1
    `;

    return consulta(sql, [nome], "Não foi possivel achar o usuario");
  }
}

export default new AdminRepository();
