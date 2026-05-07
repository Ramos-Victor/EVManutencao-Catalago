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

        try{
            const produto = await ProdutosRepository.findById(req.params.id)

            res.status(200).json(produto)
        } catch(err){
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao procurar produto!',
                mensagem: err.message
            })
        }
    }

    async Update(req, res){
        try{
            const produto = await ProdutosRepository.update(req.body,req.params.id)

            res.status(200).json(produto)
        } catch (err){
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao atualizar produto',
                mensagem: err.message
            })
        }
    }

    async Delete(req, res){

    }
}

export default new ProdutosController
