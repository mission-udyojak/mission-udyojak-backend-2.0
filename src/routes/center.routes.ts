import { Router } from "express";
import { createCenter } from "../controllers/center.controller";


const router = Router();

router.post("/centerform", createCenter);

export default router;