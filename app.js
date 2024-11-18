const express = require("express");
const cors = require("cors");
require("./config/db");

const resumeRouter = require("./routes/resume.routes");
const routineRouter = require("./routes/routine.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/resumes", resumeRouter);
app.use("/api/routines", routineRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Rest API.</h1>");
});

// for invalide routes
app.use((req, res, next) => {
  res.status(404).json({ message: "404 route not found!" });
});

// handling server side error
app.use((err, req, res) => {
  res.status(500).json({
    message: err.message,
  });
});

module.exports = app;
