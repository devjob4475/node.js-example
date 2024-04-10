const express = require("express");
const app = express();
const pool = require("./database");

require('dotenv').config();

app.use(express.json());

// API endpoint เพื่อเพิ่มข้อมูลผู้ใช้ลงในฐานข้อมูล
app.post("/api/v1/users", async (req, res) => {
  try {
    const { name, firstname, lastname } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (email, firstname, lastname) VALUES ($1, $2, $3) RETURNING *',
      [name, firstname, lastname]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ error: "Error adding user" });
  }
});

// เช็คว่ามี table ในฐานข้อมูลหรือไม่ ถ้าไม่มีให้สร้าง
async function checkAndCreateTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL
      );
    `;
    await pool.query(createTableQuery);
    console.log("Table 'users' created or already exists.");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

checkAndCreateTable();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
