import Battle from "../models/Battle.js";

// Get all battles
export const getAllBattles = async (req, res) => {
  try {
    const { era, featured } = req.query;

    const filter = {};

    if (era) {
      filter.era = era;
    }

    if (featured !== undefined) {
      filter.featured = featured === "true";
    }

    const battles = await Battle.find(filter).sort({ year: 1 });

    res.json(battles);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch battles",
    });
  }
};

// Get single battle
export const getBattleById = async (req, res) => {
  try {
    const battle = await Battle.findById(req.params.id);

    if (!battle) {
      return res.status(404).json({
        message: "Battle not found",
      });
    }

    res.json(battle);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};