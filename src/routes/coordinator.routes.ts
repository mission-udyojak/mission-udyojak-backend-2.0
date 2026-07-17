import { Router } from "express";
import { createCoordinator } from "../controllers/coordinator.controller";

const router = Router();

router.post("/coordinatorform", createCoordinator);

export default router;