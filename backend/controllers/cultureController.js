import Culture from "../models/Culture.js";

// ===================================
// Get All Culture Items
// Supports:
// ?category=Food
// ?era=Maratha
// ?region=Maharashtra
// ===================================

export const getAllCulture = async (req, res) => {
  try {
    const { category, era, region } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (era) {
      filter.era = era;
    }

    if (region) {
      filter.region = region;
    }

    const culture = await Culture.find(filter).sort({
      displayOrder: 1,
      title: 1,
    });

    res.status(200).json(culture);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// ===================================
// Get Single Culture Item
// ===================================

export const getCultureById = async (req, res) => {

  try {

    const culture = await Culture.findById(req.params.id);

    if (!culture) {

      return res.status(404).json({
        message: "Culture item not found",
      });

    }

    res.status(200).json(culture);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ===================================
// Create Culture Item
// ===================================

export const createCulture = async (req, res) => {

  try {

    const culture = await Culture.create(req.body);

    res.status(201).json(culture);

  } catch (error) {

    res.status(400).json({
      message: error.message,
    });

  }

};

// ===================================
// Update Culture Item
// ===================================

export const updateCulture = async (req, res) => {

  try {

    const culture = await Culture.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!culture) {

      return res.status(404).json({
        message: "Culture item not found",
      });

    }

    res.status(200).json(culture);

  } catch (error) {

    res.status(400).json({
      message: error.message,
    });

  }

};

// ===================================
// Delete Culture Item
// ===================================

export const deleteCulture = async (req, res) => {

  try {

    const culture = await Culture.findByIdAndDelete(req.params.id);

    if (!culture) {

      return res.status(404).json({
        message: "Culture item not found",
      });

    }

    res.status(200).json({
      message: "Culture item deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};