import mongoose from "mongoose";

const battleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    era: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    leader: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },

    video: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Battle", battleSchema);