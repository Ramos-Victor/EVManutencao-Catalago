import { Router } from "express";

import servicosRoutes from "./app/routes/ServicosRoutes.js";
import produtosRoutes from "./app/routes/ProdutosRoutes.js";
import authRoutes from "./app/routes/AuthRoutes.js";

const router = Router();

router.use("/api/servicos", servicosRoutes);

router.use("/api/produtos", produtosRoutes);

router.use("/api/auth", authRoutes);

export default router;
