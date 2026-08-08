import mongoose from "mongoose";

const heritageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Forts",
        "Mountains",
        "Museums",
        "Temples",
        "UNESCO Sites",
      ],
    },

    location: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    facts: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Heritage", heritageSchema);