import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../../config/db.js";
import Battle from "../../models/Battle.js";
import battleData from "./battleData.js";

dotenv.config();

const seedBattles = async () => {
  try {
    await connectDB();

    await Battle.deleteMany();

    await Battle.insertMany(battleData);

    console.log("✅ Battle data seeded successfully!");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding battles:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedBattles();