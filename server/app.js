// Dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

// Local modules
const userRoutes = require("./routes/user");
const opts = require("./utils/cors");

// Create express app
const app = express();

// Random Configs
require("dotenv").config();
app.use(cors(opts));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))

// Passport
app.use(passport.initialize());

// Routes
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
