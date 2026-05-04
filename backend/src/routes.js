import { Router } from "express";
import ServicosController from "./app/controllers/ServicosController.js";

const router = Router()

router.post('/servicos', ServicosController.Store)
router.get('/servicos', ServicosController.Index)
// router.get('/servicos/:id')
// router.put('/servicos/:id')
// router.delete('/servicos/:id')

export default router
