import ServicosRepository from "../repository/ServicosRepository.js";

class ServicosController {
  async Store(req, res) {
    try {
      const servico = await ServicosRepository.create(req.body);

      res.status(201).json({
        success: true,
        message: "Serviço cadastrado com sucesso!",
        data: servico,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Index(req, res) {
    try {
      const servicos = await ServicosRepository.findaAll(req.query);

      res.status(200).json({
        success: true,
        message: "Serviços listados com sucesso!",
        data: servicos,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Show(req, res) {
    try {
      const servico = await ServicosRepository.findById(req.params.id);

      res.status(200).json({
        success: true,
        message: "Serviço listado com sucesso!",
        data: servico,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Update(req, res) {
    try {
      const servico = await ServicosRepository.update(req.params.id, req.body);

      res.status(200).json({
        success: true,
        message: "Serviço atualizado com sucesso!",
        data: servico,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Delete(req, res) {
    try {
      const servico = await ServicosRepository.delete(req.params.id);

      res.status(200).json({
        success: true,
        message: "Serviço deletado com sucesso!",
        data: servico,
      });
    } catch (err) {
      console.error(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }
}

export default new ServicosController();
