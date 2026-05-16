import { Router } from "express";
import ServicosController from "./app/controllers/ServicosController.js";
import ProdutosController from "./app/controllers/ProdutosController.js";

const router = Router();

// Rotas para Serviços
router.post("/api/servicos", ServicosController.Store);
router.get("/api/servicos", ServicosController.Index);
router.get("/api/servicos/:id", ServicosController.Show);
router.put("/api/servicos/:id", ServicosController.Update);
router.delete("/api/servicos/:id", ServicosController.Delete);

// Rotas para os Produtos
router.post("/api/produtos", ProdutosController.Store);
router.get("/api/produtos", ProdutosController.Index);
router.get("/api/produtos/:id", ProdutosController.Show);
router.put("/api/produtos/:id", ProdutosController.Update);
router.delete("/api/produtos/:id", ProdutosController.Delete);

export default router;
