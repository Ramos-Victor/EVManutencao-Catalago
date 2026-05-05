import ServicosRepository from "../repository/ServicosRepository.js";

class ServicosController{
    
    async Store(req, res){
        const servico = await ServicosRepository.create(req.body)

        res.status(201).json(servico)
    }

    async Index(req, res){
        const servicos = await ServicosRepository.findaAll(req.query)

        res.status(200).json(servicos)
    }

    async Show(req, res){
        const servico = await ServicosRepository.findById(req.params.id)

        res.status(200).json(servico)
    }

    async Update(req,res){
        const servico = await ServicosRepository.update(req.params.id,req.body)

        res.status(201).json(servico)
    }

    async Delete(req, res){
        const servico = await ServicosRepository.delete(req.params.id)

        res.status(201).json(servico)
    }
}

export default new ServicosController
