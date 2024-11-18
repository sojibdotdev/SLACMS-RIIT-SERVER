const {
  createRoutine,
  updateInstituteInfo,
  updateClassPeriod,
  updateSundayRoutine,
  updateMondayRoutine,
  updateTuesdayRoutine,
  updateWednesdayRoutine,
  updateThursdayRoutine,
  getAllRoutines,
  getSingleRoutine,
} = require("../controllers/routine.controller");

const Router = require("express").Router();

// get all routines
Router.get("/", getAllRoutines);

// get a single  routine
Router.get("/:id", getSingleRoutine);

// create new routine route
Router.post("/", createRoutine);

// update instituteInfo route
Router.put("/:id/instituteInfo", updateInstituteInfo);

// update classPeriods route
Router.put("/:id/classPeriods", updateClassPeriod);

// update sunday class routine
Router.put("/:id/weeklyRoutine/sunday", updateSundayRoutine);

// update monday class routine
Router.put("/:id/weeklyRoutine/monday", updateMondayRoutine);

// update Tuesday class routine
Router.put("/:id/weeklyRoutine/tuesday", updateTuesdayRoutine);

// update Wednesday class routine
Router.put("/:id/weeklyRoutine/wednesday", updateWednesdayRoutine);

// update Thursday class routine
Router.put("/:id/weeklyRoutine/thursday", updateThursdayRoutine);

module.exports = Router;
