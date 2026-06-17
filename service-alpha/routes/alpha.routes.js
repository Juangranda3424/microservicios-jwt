import { alphaGetData } from "../controllers/alpha.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.get("/private", authMiddleware, alphaGetData);

export default router;