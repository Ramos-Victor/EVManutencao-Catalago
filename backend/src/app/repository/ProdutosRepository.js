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

    update(){

    }

    delete(){

    }
}

export default new ProdutosRepository
