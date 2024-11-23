const express = require('express');
const {sequelize} = require('./models')
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.use("/api/companies", companyRoutes);
app.use("/api/users", userRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Failed to sync database:", error));
