const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// สร้าง table ในฐานข้อมูล
(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Table User created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
})();

module.exports = User;
