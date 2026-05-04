import { consulta } from "../database/conexao.js";

class ServicosRepository{

    create(servico){
        const sql = 'INSERT INTO tb_servicos SET ?'

        return consulta(sql, servico, "Não foi possivel criar o serviço")
    }

}

export default new ServicosRepository
