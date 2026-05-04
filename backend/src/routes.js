import { Router } from "express";
import ServicosController from "./app/controllers/ServicosController.js";

const router = Router()

// router.get('/servicos',)
// router.get('/servicos/:id')
router.post('/servicos', ServicosController.Store)
// router.put('/servicos/:id')
// router.delete('/servicos/:id')

export default router
