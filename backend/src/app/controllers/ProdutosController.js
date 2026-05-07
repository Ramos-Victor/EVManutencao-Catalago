import ProdutosRepository from "../repository/ProdutosRepository.js";

class ProdutosController{

    async Store(req, res){
        try{
            const produto = await ProdutosRepository.create(req.body)

            res.status(201).json(produto)
        } catch(err){
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao cadastrar produto',
                mensagem: err.message
            })
        }
    }

    async Index(req, res){

        try{
            const produtos = await ProdutosRepository.findAll()

            res.status(200).json(produtos)
        }catch (err){
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao listar produtos',
                mensagem: err.message
            })
        }
    }
    
    async Show(req, res){

    }

    async Update(req, res){

    }

    async Delete(req, res){

    }
}

export default new ProdutosController
