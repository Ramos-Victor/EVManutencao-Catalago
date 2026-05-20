import { consulta } from "../database/conexao.js";

class AdminRepository {
  login(admin) {
    const sql = "SELECT * FROM tb_admin WHERE nome = ?";

    return consulta(sql, [admin], "Não foi possivel achar o usuario");
  }
}

export default new AdminRepository();
