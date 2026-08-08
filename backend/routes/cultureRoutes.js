import express from "express";

import {
  getAllCulture,
  getCultureById,
  createCulture,
  updateCulture,
  deleteCulture,
} from "../controllers/cultureController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================
// Public Routes
// ===============================

// Get all culture items
// Examples:
// /api/culture
// /api/culture?category=Food
// /api/culture?category=Food&era=Maratha

router.get("/", getAllCulture);

// Get single culture item

router.get("/:id", getCultureById);

// ===============================
// Protected Routes (Admin)
// ===============================

// Create

router.post("/", protect, createCulture);

// Update

router.put("/:id", protect, updateCulture);

// Delete

router.delete("/:id", protect, deleteCulture);

export default router;