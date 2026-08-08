import express from "express";
import {
  getAllHeritage,
  getHeritageBySlug,
  createHeritage,
  updateHeritage,
  deleteHeritage,
} from "../controllers/heritageController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllHeritage);
router.get("/:slug", getHeritageBySlug);

// Admin Routes
router.post("/", protect, createHeritage);
router.put("/:id", protect, updateHeritage);
router.delete("/:id", protect, deleteHeritage);

export default router;