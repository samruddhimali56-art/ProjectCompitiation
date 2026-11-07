import mongoose from "mongoose";
import dotenv from "dotenv";

import Leader from "./models/Leader.js";
import leaders from "./seed/leaderData.js";


// Load environment variables
dotenv.config();


// MongoDB Connection
const seedDatabase = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");


    // Remove existing leaders
    await Leader.deleteMany();

    console.log("Old leader data removed");


    // Insert new leaders
    await Leader.insertMany(leaders);

    console.log("Leaders added successfully");


    // Close connection
    await mongoose.connection.close();

    console.log("Database connection closed");


  } catch (error) {

    console.log("Error:", error.message);

    process.exit(1);

  }
};


seedDatabase();