const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Schema for instituteInfo within routinedata
const instituteInfoSchema = new mongoose.Schema({
  instituteName: { type: String, required: true },
  location: { type: String, required: true },
  instituteCode: { type: String, required: true },
  clssStartDate: { type: String, required: true }, // Assuming date is stored as a string
  technology: { type: String, required: true },
  semester: { type: String, required: true },
});

// Schema for classPeriods within routinedata
const classPeriodSchema = new mongoose.Schema({
  periodName: { type: String, required: true },
  classStartTime: { type: String, required: true }, // Assuming 'time' is stored as a string
  classEndTime: { type: String, required: true },
});

// Schema for periods within weeklyRoutine
const periodSchema = new mongoose.Schema({
  period: { type: String, required: true },
  classStartTime: { type: String, required: true },
  classEndTime: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
  roomNumber: { type: String, required: true },
  teacherName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

// Schema for weeklyRoutine
const weeklyRoutineSchema = new mongoose.Schema({
  day: { type: String, required: true },
  periods: { type: [periodSchema], required: true }, // Array of periods, minimum one required
});

// Main schema for the entire document
const routineSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4(),
  },
  instituteInfo: instituteInfoSchema,
  classPeriods: { type: [classPeriodSchema], required: true }, // Array of classPeriods
  weeklyRoutine: { type: [weeklyRoutineSchema], required: true },
  createdOn: {
    type: Date,
    default: new Date().toDateString(),
  },
});

// Model creation
module.exports = mongoose.model("routines", routineSchema);
