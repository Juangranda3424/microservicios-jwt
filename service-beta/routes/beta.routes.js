import { alphaGetData } from "../controllers/beta.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.get("/private", authMiddleware, betaGetData);

export default router;