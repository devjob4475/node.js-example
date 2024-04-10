const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");

// const sequelize = new Sequelize(
//   "verceldb", // ชื่อฐานข้อมูล
//   "default", // ชื่อผู้ใช้
//   "TvpP28uVGeXk", // รหัสผ่าน
//   {
//     host: "ep-bold-wave-a15og2a1.ap-southeast-1.aws.neon.tech",
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   }
// );

// const User = sequelize.define("User", {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     firstname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

app.use(express.json()); // Add this line to parse JSON requests

app.get("/", (req, res) => res.send("Express on Vercel"));

// app.post("/users", async (req, res) => {
//   try {
//     const { email, firstname, lastname } = req.body;

//     // Create a new user record in the database
//     const newUser = await User.create({ email, firstname, lastname });

//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to create user." });
//   }
// });

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
