const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected to PostgreSQL successfully!");
  createBooksTable(); // เรียกใช้ฟังก์ชันสร้างตาราง books เมื่อเชื่อมต่อฐานข้อมูลสำเร็จ
});

async function createBooksTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS books (
        book_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL
      );
    `;
    await pool.query(createTableQuery);
    console.log("Table 'books' created or already exists.");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

module.exports = pool;
