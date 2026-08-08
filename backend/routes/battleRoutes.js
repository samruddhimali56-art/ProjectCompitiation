import express from "express";
import {
  getAllBattles,
  getBattleById,
} from "../controllers/battleController.js";

const router = express.Router();

router.get("/", getAllBattles);
router.get("/:id", getBattleById);

export default router;