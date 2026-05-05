import { consulta } from "../database/conexao.js";

class ServicosRepository{

    create(servico){
        const sql = 'INSERT INTO tb_servicos SET ?'

        return consulta(sql, servico, "Não foi possivel criar o serviço!")
    }

    findaAll(query){
        let { ativo } = query;

        let sql = 'SELECT * FROM tb_servicos'

        let params = [];

        if (ativo === undefined) {
        ativo = 'true';
        }

        if (ativo !== 'all') {
        const ativoMap = {
            'true': 1,
            'false': 0,
            '1': 1,
            '0': 0
        };

        const valor = ativoMap[ativo];

        sql += ' WHERE ativo = ?';
        params.push(valor);
        }

        return consulta(sql,params, "Não foi possivel realizar a consulta!")
    }

    findById(id){
        const sql = 'SELECT * FROM tb_servicos WHERE id = ?'

        return consulta(sql,id,"Não foi possivel realizar a consulta!")
    }

    update(id, body){
        const sql = 'UPDATE tb_servicos SET ? where id = ?'

        return consulta(sql,[body,id],"Não foi possivel realizar a edição!")
    }

    delete(id){
        const sql = 'UPDATE tb_servicos SET ativo = 0 where id = ?';

        return consulta(sql,id,"Não foi possivel deletar o serviço!")
    }

}

export default new ServicosRepository
