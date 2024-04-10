const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE, // ชื่อฐานข้อมูล
  process.env.POSTGRES_USER, // ชื่อผู้ใช้
  process.env.POSTGRES_PASSWORD, // รหัสผ่าน
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
