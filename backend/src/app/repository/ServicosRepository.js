import { consulta } from "../database/conexao.js";

class ServicosRepository {
  create(servico) {
    const sql = "INSERT INTO tb_servicos SET ?";

    return consulta(sql, servico, "Não foi possivel criar o serviço!");
  }

  findaAll(limit, offset) {
    const sql = "SELECT * FROM tb_servicos LIMIT ? OFFSET ?";

    return consulta(sql, [limit, offset], "Não foi possivel consultar!");
  }

  count() {
    const sql = "SELECT COUNT(*) AS TOTAL FROM tb_servicos";

    return consulta(sql, [], "Não foi possivel ");
  }

  findById(id) {
    const sql = "SELECT * FROM tb_servicos WHERE id = ?";

    return consulta(sql, id, "Não foi possivel realizar a consulta!");
  }

  update(id, body) {
    const sql = "UPDATE tb_servicos SET ? where id = ?";

    return consulta(sql, [body, id], "Não foi possivel atualizar o produto!");
  }

  delete(id) {
    const sql = "DELETE FROM tb_servicos where id = ?";

    return consulta(sql, id, "Não foi possivel deletar o serviço!");
  }
}

export default new ServicosRepository();
