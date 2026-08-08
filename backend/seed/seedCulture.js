import dotenv from "dotenv";
import mongoose from "mongoose";

import Culture from "../models/Culture.js";
import cultureData from "./cultureData.js";

dotenv.config();

const seedCulture = async () => {

  try {

    // Connect MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Delete old data
    await Culture.deleteMany();

    console.log("Old Culture Deleted");

    // Insert new data
    await Culture.insertMany(cultureData);

    console.log(
      `${cultureData.length} Culture Records Inserted Successfully`
    );

    process.exit();

  }

  catch (error) {

    console.log(error);

    process.exit(1);

  }

};

seedCulture();