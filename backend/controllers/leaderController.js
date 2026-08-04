import Leader from "../models/Leader.js";

// ===============================
// Get All Leaders
// ===============================

export const getAllLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find();

    res.status(200).json(leaders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Get Leader By ID
// ===============================

export const getLeaderById = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);

    if (!leader) {
      return res.status(404).json({
        message: "Leader not found",
      });
    }

    res.status(200).json(leader);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Create Leader
// ===============================

export const createLeader = async (req, res) => {
  try {
    const leader = await Leader.create(req.body);

    res.status(201).json(leader);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// ===============================
// Update Leader
// ===============================

export const updateLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!leader) {
      return res.status(404).json({
        message: "Leader not found",
      });
    }

    res.status(200).json(leader);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// ===============================
// Delete Leader
// ===============================

export const deleteLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndDelete(req.params.id);

    if (!leader) {
      return res.status(404).json({
        message: "Leader not found",
      });
    }

    res.status(200).json({
      message: "Leader deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};