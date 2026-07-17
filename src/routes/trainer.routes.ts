import { Router } from "express";
import { createTrainer } from "../controllers/trainer.controller";

const router = Router();

router.post("/trainerform", createTrainer);

export default router;