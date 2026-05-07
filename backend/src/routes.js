import { Router } from "express";
import ServicosController from "./app/controllers/ServicosController.js";
import ProdutosController from "./app/controllers/ProdutosController.js";

const router = Router()

// Rotas para Serviços
router.post('/servicos', ServicosController.Store)
router.get('/servicos', ServicosController.Index)
router.get('/servicos/:id', ServicosController.Show)
router.put('/servicos/:id', ServicosController.Update)
router.delete('/servicos/:id', ServicosController.Delete)

// Rotas para os Produtos
router.post('/produtos', ProdutosController.Store)
router.get('/produtos', ProdutosController.Index)
router.get('/produtos/:id', ProdutosController.Show)

export default router
