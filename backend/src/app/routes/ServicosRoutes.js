import { Router } from "express";

import ServicosController from "../controllers/ServicosController.js";

import authMiddleware from "../middleware/auth.js";

const router = Router();

router.post("/", authMiddleware, ServicosController.Store);

router.get("/", ServicosController.Index);

router.get("/:id", ServicosController.Show);

router.put("/:id", authMiddleware, ServicosController.Update);

router.delete("/:id", authMiddleware, ServicosController.Delete);

export default router;
