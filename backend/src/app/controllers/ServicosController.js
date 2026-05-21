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
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const servicos = await ServicosRepository.findaAll(limit, offset);

      const [totalResult] = await ServicosRepository.count();

      const total = totalResult.TOTAL;

      res.status(200).json({
        success: true,
        message: "Serviços listados com sucesso!",
        data: servicos,
        pagination: {
          total: total,
          page: page,
          limit: limit,
          totalPages: Math.ceil(total / limit),
        },
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
