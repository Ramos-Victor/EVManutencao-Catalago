import ProdutosRepository from "../repository/ProdutosRepository.js";

class ProdutosController {
  async Store(req, res) {
    try {
      const produto = await ProdutosRepository.create(req.body);

      res.status(201).json({
        success: true,
        message: "Produto cadastrado com sucesso!",
        data: produto,
      });
    } catch (err) {
      console.log(err);

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

      const produtos = await ProdutosRepository.findAll(limit, offset);

      const [totalResult] = await ProdutosRepository.count();

      const total = totalResult.TOTAL;

      res.status(200).json({
        success: true,
        message: "Produtos listados com sucesso!",
        data: produtos,
        pagination: {
          total: total,
          page: page,
          limit: limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Show(req, res) {
    try {
      const produto = await ProdutosRepository.findById(req.params.id);

      res.status(200).json({
        success: true,
        message: "Produto listado com sucesso!",
        data: produto,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Update(req, res) {
    try {
      const produto = await ProdutosRepository.update(req.body, req.params.id);

      res.status(200).json({
        success: true,
        message: "Produto atualizado com sucesso!",
        data: produto,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  async Delete(req, res) {
    try {
      const produto = await ProdutosRepository.delete(req.params.id);

      res.status(200).json({
        success: true,
        message: "Produto excluido com sucesso!",
        data: produto,
      });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
        error: "INTERNAL_SERVER_ERROR",
      });
    }
  }
}

export default new ProdutosController();
