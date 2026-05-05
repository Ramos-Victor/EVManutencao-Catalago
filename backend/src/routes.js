import { Router } from "express";
import ServicosController from "./app/controllers/ServicosController.js";

const router = Router()

router.post('/servicos', ServicosController.Store)
router.get('/servicos', ServicosController.Index)
router.get('/servicos/:id', ServicosController.Show)
router.put('/servicos/:id', ServicosController.Update)
router.delete('/servicos/:id', ServicosController.Delete)

export default router
