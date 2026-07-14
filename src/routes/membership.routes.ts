import { Router } from "express";
import { createMembership } from "../controllers/membership.controller";

const router = Router();

router.post("/membershipform", createMembership);

export default router;