import ServicosRepository from "../repository/ServicosRepository.js";

class ServicosController{
    
    async Store(req, res){
        const servico = await ServicosRepository.create(req.body)

        res.status(201).json(servico)
    }

    async Index(req, res){
        const servicos = await ServicosRepository.findaAll()

        res.status(200).json(servicos)
    }
}

export default new ServicosController
