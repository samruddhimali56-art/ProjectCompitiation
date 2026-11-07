import Heritage from "../models/Heritage.js";

// Get all heritage items
export const getAllHeritage = async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    const heritage = await Heritage.find(filter).sort({ title: 1 });

    res.status(200).json(heritage);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch heritage data",
      error: error.message,
    });
  }
};

// Get single heritage item by slug
export const getHeritageBySlug = async (req, res) => {
  try {
    const heritage = await Heritage.findOne({
      slug: req.params.slug,
    });

    if (!heritage) {
      return res.status(404).json({
        message: "Heritage not found",
      });
    }

    res.status(200).json(heritage);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch heritage",
      error: error.message,
    });
  }
};

// Create heritage
export const createHeritage = async (req, res) => {
  try {
    const heritage = await Heritage.create(req.body);

    res.status(201).json(heritage);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create heritage",
      error: error.message,
    });
  }
};

// Update heritage
export const updateHeritage = async (req, res) => {
  try {
    const heritage = await Heritage.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!heritage) {
      return res.status(404).json({
        message: "Heritage not found",
      });
    }

    res.status(200).json(heritage);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update heritage",
      error: error.message,
    });
  }
};

// Delete heritage
export const deleteHeritage = async (req, res) => {
  try {
    const heritage = await Heritage.findByIdAndDelete(req.params.id);

    if (!heritage) {
      return res.status(404).json({
        message: "Heritage not found",
      });
    }

    res.status(200).json({
      message: "Heritage deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete heritage",
      error: error.message,
    });
  }
};