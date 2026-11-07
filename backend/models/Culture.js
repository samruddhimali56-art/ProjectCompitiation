import mongoose from "mongoose";

const cultureSchema = new mongoose.Schema(
  {
    // =========================
    // Basic Information
    // =========================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // =========================
    // Category
    // =========================

    category: {
      type: String,
      required: true,
      enum: [
        "Food",
        "Clothing",
        "Languages",
        "Dance",
        "Music",
        "Festivals",
        "Architecture",
        "Arts & Crafts",
      ],
    },

    // =========================
    // Era
    // =========================

    era: {
      type: String,
      required: true,
      enum: [
        "Ancient India",
        "Maratha",
        "Mughal",
        "Rajput",
        "Sikh",
        "South India",
      ],
    },

    // =========================
    // Region
    // =========================

    region: {
      type: String,
      trim: true,
    },

    // =========================
    // Description
    // =========================

    shortDescription: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    // =========================
    // Images
    // =========================

    image: {
      type: String,
      required: true,
    },

    gallery: [
      {
        type: String,
      },
    ],

    // =========================
    // Extra Information
    // =========================

    interestingFacts: [
      {
        type: String,
      },
    ],

    // =========================
    // Admin
    // =========================

    featured: {
      type: Boolean,
      default: false,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Culture", cultureSchema);