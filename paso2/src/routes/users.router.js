import { Router } from "express";
import {
  getUsers,
  getUserById,
  saveUser
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/", getUsers);
router.get("/:uid", getUserById);
router.post("/", saveUser);
export default router;
