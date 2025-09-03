import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, contact_no, age, gender } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 2️⃣ Check if user exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4️⃣ Save user
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      contact_no,
      age,
      gender,
    });

    res.status(201).json({
      message: "✅ User registered successfully",
      user: newUser,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
