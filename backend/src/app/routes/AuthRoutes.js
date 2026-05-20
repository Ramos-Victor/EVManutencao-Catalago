import { Router } from "express";

import AdminController from "../controllers/AdminController.js";

const router = Router();

router.post("/login", AdminController.Login);

export default router;
