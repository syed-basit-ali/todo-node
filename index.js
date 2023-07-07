"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./src/config/corsOptions");
const { logger } = require("./src/middleware/logEvents");
const errorHandler = require("./src/middleware/errorHandler");
const verifyJWT = require("./src/middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./src/middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./src/config/dbConn");
const userRoute = require("./src/routes/user.route");
const todoRoute = require("./src/routes/todo.route");
const PORT = process.env.PORT || 3500;

connectDB();

app.use(logger);
app.use(credentials);
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, "/public")));

app.use(errorHandler);

// attach routes here
app.use("/api/users", userRoute);
app.use("/api/todo", todoRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
