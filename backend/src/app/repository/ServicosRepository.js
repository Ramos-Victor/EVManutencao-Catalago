import { consulta } from "../database/conexao.js";

class ServicosRepository{

    create(servico){
        const sql = 'INSERT INTO tb_servicos SET ?'

        return consulta(sql, servico, "Não foi possivel criar o serviço!")
    }

    findaAll(){
        const sql = 'SELECT * FROM tb_servicos'

        return consulta(sql, "Não foi possivel realizar a consulta!")
    }

}

export default new ServicosRepository
