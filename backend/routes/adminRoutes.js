import express from "express";
import {
  createDefaultAdmin,
  loginAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

// Create default admin (Run only once)
router.post("/create-admin", createDefaultAdmin);

// Admin Login
router.post("/login", loginAdmin);

export default router;