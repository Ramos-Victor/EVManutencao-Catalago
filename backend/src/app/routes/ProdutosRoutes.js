import { Router } from "express";

import ProdutosController from "../controllers/ProdutosController.js";

import authMiddleware from "../middleware/auth.js";

const router = Router();

router.post("/", authMiddleware, ProdutosController.Store);

router.get("/", ProdutosController.Index);

router.get("/:id", ProdutosController.Show);

router.put("/:id", authMiddleware, ProdutosController.Update);

router.delete("/:id", authMiddleware, ProdutosController.Delete);

export default router;
