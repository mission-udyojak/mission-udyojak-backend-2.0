import { Router } from "express";
import { createVendor } from "../controllers/vendor.controller";

const router = Router();

router.post("/vendorform", createVendor);

export default router;