require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// cors middleware
app.use(cors());

// middleware to parse JSON requests
app.use(express.json());

// connect to database
connectDB();

// routes
app.use('/api/auth', require('./app/routes/userRoutes'));
app.use('/api', require('./app/routes/customerRoutes'));
app.use('/api', require('./app/routes/caseRoutes'));

// start server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
