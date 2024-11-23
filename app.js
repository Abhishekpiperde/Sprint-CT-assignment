const express = require('express');
const {sequelize} = require('./models')
const companyRoutes = require("./routes/companyRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/users", userRoutes);

// Sync Database and Start Server
sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on http://localhost:4000");
    });
  })
  .catch((error) => console.error("Failed to sync database:", error));
