const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "verceldb", // ชื่อฐานข้อมูล
  "default", // ชื่อผู้ใช้
  "TvpP28uVGeXk", // รหัสผ่าน
  {
    host: "ep-bold-wave-a15og2a1.ap-southeast-1.aws.neon.tech",
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
