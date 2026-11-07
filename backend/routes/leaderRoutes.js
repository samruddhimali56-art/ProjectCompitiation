

import express from "express";
import {
  getAllLeaders,
  getLeaderById,
  createLeader,
  updateLeader,
  deleteLeader,
} from "../controllers/leaderController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getAllLeaders);
router.get("/:id", getLeaderById);

// Protected
router.post("/", protect, createLeader);
router.put("/:id", protect, updateLeader);
router.delete("/:id", protect, deleteLeader);

export default router;