import {login, refresh } from "../controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

router.post("/login", login);
router.post("/refresh", refresh);

export default router;