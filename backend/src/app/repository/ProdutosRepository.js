import { consulta } from "../database/conexao.js";

class ProdutosRepository {
  create(produto) {
    const sql = `
      INSERT INTO tb_produtos (
        nome,
        descricao,
        ativo,
        url_imagem
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const values = [
      produto.nome,
      produto.descricao,
      produto.ativo,
      produto.url_imagem,
    ];

    return consulta(sql, values, "Não foi possivel criar o produto!");
  }

  findAll(limit, offset) {
    const sql = `
      SELECT * FROM tb_produtos
      LIMIT $1 OFFSET $2
    `;

    return consulta(sql, [limit, offset], "Não foi possivel consultar!");
  }

  count() {
    const sql = `
      SELECT COUNT(*) AS TOTAL
      FROM tb_produtos
    `;

    return consulta(sql, [], "Não foi possivel contar os produtos!");
  }

  findById(id) {
    const sql = `
      SELECT * FROM tb_produtos
      WHERE id = $1
    `;

    return consulta(sql, [id], "Não foi possivel realizar a consulta!");
  }

  update(body, id) {
    const sql = `
      UPDATE tb_produtos
      SET nome = $1,
          descricao = $2,
          ativo = $3,
          url_imagem = $4
      WHERE id = $5
      RETURNING *
    `;

    const values = [body.nome, body.descricao, body.ativo, body.url_imagem, id];

    return consulta(sql, values, "Não foi possivel atualizar o produto!");
  }

  delete(id) {
    const sql = `
      DELETE FROM tb_produtos
      WHERE id = $1
      RETURNING *
    `;

    return consulta(sql, [id], "Não foi possivel deletar o produto!");
  }
}

export default new ProdutosRepository();
