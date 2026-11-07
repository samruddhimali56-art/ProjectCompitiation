import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

// Create default admin (Run only once)
export const createDefaultAdmin = async (req, res) => {
  try {
    const adminExists = await Admin.findOne({
      email: "admin@eraflow.com",
    });

    if (adminExists) {
      return res.status(400).json({
        message: "Default admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const admin = await Admin.create({
      name: "EraFlow Admin",
      email: "admin@eraflow.com",
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Default admin created successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      email,
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};