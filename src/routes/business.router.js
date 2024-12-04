import { Router } from "express";

import {
  getBusiness,
  getBusinessById,
  saveBusiness,
  addProduct
} from "../controllers/business.controllers.js";
const router = Router();

router.get("/", getBusiness);
router.get("/:uid", getBusinessById);
router.post("/", saveBusiness);
router.post("/:bid/product", addProduct);
export default router;
