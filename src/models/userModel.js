import { pool } from "../config/db.js";

// 🔍 Check if user exists by email
export const findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};

// ➕ Create new user
export const createUser = async (userData) => {
  const { name, email, password, contact_no, age, gender } = userData;
  const result = await pool.query(
    `INSERT INTO users (name, email, password, contact_no, age, gender)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, name, email, contact_no, age, gender`,
    [name, email, password, contact_no, age, gender]
  );
  return result.rows[0];
};
