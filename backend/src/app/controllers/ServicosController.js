import ServicosRepository from "../repository/ServicosRepository.js";

class ServicosController{
    
    async Store(req, res){
        const servico = await ServicosRepository.create(req.body)

        res.status(201).json(servico);
    }
}

export default new ServicosController
