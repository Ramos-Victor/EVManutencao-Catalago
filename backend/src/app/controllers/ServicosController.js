import ServicosRepository from "../repository/ServicosRepository.js";

class ServicosController{
    
    async Store(req, res){
        try {
            const servico = await ServicosRepository.create(req.body)

            res.status(201).json(servico)

        } catch (err) {
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao cadastrar serviço',
                mensagem: err.message
            })
        }
    }

    async Index(req, res){
        try {
            const servicos = await ServicosRepository.findaAll(req.query)

            res.status(200).json(servicos)

        } catch (err) {
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao listar serviços',
                mensagem: err.message
            })
        }
    }

    async Show(req, res){
        try {
            const servico = await ServicosRepository.findById(req.params.id)

            if(!servico){
                return res.status(404).json({
                    erro: 'Serviço não encontrado'
                })
            }

            res.status(200).json(servico)

        } catch (err) {
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao buscar serviço',
                mensagem: err.message
            })
        }
    }

    async Update(req,res){
        try {
            const servico = await ServicosRepository.update(req.params.id, req.body)

            res.status(200).json(servico)

        } catch (err) {
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao atualizar serviço',
                mensagem: err.message
            })
        }
    }

    async Delete(req, res){
        try {
            const servico = await ServicosRepository.delete(req.params.id)

            res.status(200).json(servico)

        } catch (err) {
            console.log(err)

            res.status(500).json({
                erro: 'Erro ao deletar serviço',
                mensagem: err.message
            })
        }
    }
}

export default new ServicosController
