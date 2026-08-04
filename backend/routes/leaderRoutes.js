import express from "express";
import {
  getAllLeaders,
  getLeaderById,
  createLeader,
  updateLeader,
  deleteLeader,
} from "../controllers/leaderController.js";

const router = express.Router();

// Get all leaders
router.get("/", getAllLeaders);

// Get leader by ID
router.get("/:id", getLeaderById);

// Add new leader
router.post("/", createLeader);

// Update leader
router.put("/:id", updateLeader);

// Delete leader
router.delete("/:id", deleteLeader);

export default router;