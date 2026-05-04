import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_evmanutencao'
})

conexao.connect()

/**
 * Executa um código sql com ou sem valores 
 * @param {string} sql string sql a ser executada
 * @param {array []} valores 
 * @param {string} mensagemReject mensagem exibida do reject
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores = '', mensagemReject = 'Erro na consulta') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, resultado) => {
            if (error) {
                return reject({
                    mensagem: mensagemReject,
                    erroOriginal: error
                });
            }

            return resolve(resultado);
        });
    });
};

export default conexao
