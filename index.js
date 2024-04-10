const express = require("express");
const app = express();
const User = require("./models/User");


app.use(express.json()); // Add this line to parse JSON requests

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/users", (req, res) => {
    // รับข้อมูล JSON ที่ส่งมาจาก client
    const { email, firstname, lastname } = req.body;
  
    // สร้าง JSON object ใหม่เพื่อคืนให้ client
    const userData = {
      email,
      firstname,
      lastname,
    };
  
    // คืนข้อมูล JSON ที่ได้รับ
    res.json(userData);
  });

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;