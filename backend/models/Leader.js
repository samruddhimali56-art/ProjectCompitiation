import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      trim: true,
    },

    event: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const leaderSchema = new mongoose.Schema(
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
      trim: true,
      lowercase: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "King",
        "Queen",
        "Emperor",
        "Warrior",
        "Freedom Fighter",
        "Leader",
        "Scientist",
        "Philosopher",
        "Social Reformer",
        "President",
      ],
      required: true,
    },

    // =========================
    // Kingdom Information
    // =========================

    empire: {
      type: String,
      required: true,
      trim: true,
    },

    dynasty: {
      type: String,
      trim: true,
    },

    reign: {
      type: String,
      trim: true,
    },

    capital: {
      type: String,
      trim: true,
    },

    // =========================
    // Personal Information
    // =========================

    birth: {
      type: String,
      trim: true,
    },

    death: {
      type: String,
      trim: true,
    },

    placeOfBirth: {
      type: String,
      trim: true,
    },

    father: {
      type: String,
      trim: true,
    },

    mother: {
      type: String,
      trim: true,
    },

    // =========================
    // Media
    // =========================

    image: {
      type: String,
      required: true,
      trim: true,
    },

    gallery: [
      {
        type: String,
      },
    ],

    // =========================
    // Biography
    // =========================

    biography: {
      type: String,
      required: true,
    },

    achievements: [
      {
        type: String,
      },
    ],

    battles: [
      {
        type: String,
      },
    ],

    quotes: [
      {
        type: String,
      },
    ],

    timeline: [timelineSchema],

    interestingFacts: [
      {
        type: String,
      },
    ],

    // =========================
    // Extra
    // =========================

    isFeatured: {
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

export default mongoose.model("Leader", leaderSchema);