import { consulta } from "../database/conexao.js";

class ProdutosRepository{

    create(produto){
       const sql = 'INSERT INTO tb_produtos SET ?'

       console.log(produto)
       return consulta(sql,produto, "Não foi possivel criar o produto!")
    }

    findAll(){
        const sql = 'SELECT * FROM tb_produtos'

        return consulta(sql,[],"Não foi possivel consultar!")
    }

    findById(id){
        const sql = 'SELECT * FROM tb_produtos WHERE id = ?'

        return consulta(sql,id,"Não foi possivel realizar a consulta!")
    }

    update(body, id){
        const sql = 'UPDATE tb_produtos SET ? WHERE id = ?'

        return consulta(sql,[body,id],"Não foi possivel atualizar o produto!")
    }

    delete(id){
        const sql = 'DELETE FROM tb_produtos WHERE id = ?'

        return consulta(sql, id,"Não foi possivel deletar o produto!")
    }
}

export default new ProdutosRepository
