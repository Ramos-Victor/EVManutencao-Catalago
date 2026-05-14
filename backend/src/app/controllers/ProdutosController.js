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
      const produtos = await ProdutosRepository.findAll();

      res.status(200).json({
        success: true,
        message: "Produtos listados com sucesso!",
        data: produtos,
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
