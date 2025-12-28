require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());

// connect to database
connectDB();

// routes
app.use('/api/auth', require('./app/routes/userRoutes'));
app.use('/api', require('./app/routes/customerRoutes'));
app.use('/api', require('./app/routes/caseRoutes'));

// start server
app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
