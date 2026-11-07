import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../../config/db.js";
import Heritage from "../../models/Heritage.js";
import heritageData from "./heritageData.js";

dotenv.config();

const seedHeritage = async () => {
  try {
    await connectDB();

    // Clear existing heritage data
    await Heritage.deleteMany();

    // Insert new heritage data
    await Heritage.insertMany(heritageData);

    console.log("✅ Heritage data seeded successfully!");

    await mongoose.connection.close();
    process.exit(0);

  } catch (error) {
    console.error("❌ Error seeding heritage:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedHeritage();