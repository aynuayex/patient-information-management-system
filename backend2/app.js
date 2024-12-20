const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./routes/patient");
const connectDB = require("./utils/dbConnect");

const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Connect to the database
connectDB();

app.use("/api/patients", router);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
