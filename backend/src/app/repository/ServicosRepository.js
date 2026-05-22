import { consulta } from "../database/conexao.js";

class ServicosRepository {
  create(servico) {
    const sql = `
      INSERT INTO tb_servicos (nome, descricao, ativo)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const values = [servico.nome, servico.descricao, servico.ativo];

    return consulta(sql, values, "Não foi possivel criar o serviço!");
  }

  findAll(limit, offset) {
    const sql = `
      SELECT * FROM tb_servicos
      LIMIT $1 OFFSET $2
    `;

    return consulta(sql, [limit, offset], "Não foi possivel consultar!");
  }

  count() {
    const sql = `
      SELECT COUNT(*) AS TOTAL
      FROM tb_servicos
    `;

    return consulta(sql, [], "Não foi possivel contar os serviços!");
  }

  findById(id) {
    const sql = `
      SELECT * FROM tb_servicos
      WHERE id = $1
    `;

    return consulta(sql, [id], "Não foi possivel realizar a consulta!");
  }

  update(id, body) {
    const sql = `
      UPDATE tb_servicos
      SET nome = $1,
          descricao = $2,
          ativo = $3
      WHERE id = $4
      RETURNING *
    `;

    const values = [body.nome, body.descricao, body.ativo, id];

    return consulta(sql, values, "Não foi possivel atualizar o serviço!");
  }

  delete(id) {
    const sql = `
      DELETE FROM tb_servicos
      WHERE id = $1
      RETURNING *
    `;

    return consulta(sql, [id], "Não foi possivel deletar o serviço!");
  }
}

export default new ServicosRepository();
