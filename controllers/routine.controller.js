const routineModel = require("../models/routine.model");

const timetable = [
  {
    day: "Sunday",
    periods: [
      "28542 US Hardware Lab",
      "28541 HA 506 29041 SI 506",
      "",
      "28544 EH 506",
    ],
  },
  {
    day: "Monday",
    periods: [
      "28543 SA 606",
      "28542 US 606 26841 SN 606",
      "28541 HA 506 29041 SI 506",
      "",
      "28544 EH 506",
    ],
  },
  {
    day: "Tuesday",
    periods: [
      "28543 SA Hardware Lab",
      "28543 US 506 29041 SI 506",
      "28541 HA 506",
      "",
      "28544 EH 506",
    ],
  },
  {
    day: "Wednesday",
    periods: [
      "28543 SA 506 26841 SN 506 28531 LK 506 28541 HA 506",
      "28531 LK 604 28543 SA 604",
      "",
      "28544 EH 604",
    ],
  },
  {
    day: "Thursday",
    periods: [
      "28544 EH 604 28543 SA 604 28531 LK 604",
      "26841 SN Electronics Lab",
    ],
  },
];

const routineTable = {
  routinedata: {
    instituteInfo: {
      instituteName: "string",
      location: "string",
      instituteCode: 1212,
      clssStartDate: "12/12/2023",
      technology: "computer",
      semester: "4th",
    },
    classPeriods: [
      { periodName: "string", classStartTime: "time", classEndTime: "time" },
      { periodName: "string", classStartTime: "time", classEndTime: "time" },
    ],
    weeklyRoutine: [
      {
        day: "Sunday",
        periods: [
          {
            period: "Number",
            classStartTime: "String",
            classEndTime: "string",
            subjectName: "string",
            subjectCode: "string",
            roomNumber: "string",
            teacherName: "string",
            phoneNumber: "string",
          },
        ],
      },
      {
        day: "Monday",
        periods: [
          {
            period: "Number",
            classStartTime: "String",
            classEndTime: "string",
            subjectName: "string",
            subjectCode: "string",
            roomNumber: "string",
            teacherName: "string",
            phoneNumber: "string",
          },
        ],
      },
      {
        day: "Tuesday",
        periods: [
          {
            period: "Number",
            classStartTime: "String",
            classEndTime: "string",
            subjectName: "string",
            subjectCode: "string",
            roomNumber: "string",
            teacherName: "string",
            phoneNumber: "string",
          },
        ],
      },
      {
        day: "Wednesday",
        periods: [
          {
            period: "Number",
            classStartTime: "String",
            classEndTime: "string",
            subjectName: "string",
            subjectCode: "string",
            roomNumber: "string",
            teacherName: "string",
            phoneNumber: "string",
          },
        ],
      },
      {
        day: "Thursday",
        periods: [
          {
            period: "Number",
            classStartTime: "String",
            classEndTime: "string",
            subjectName: "string",
            subjectCode: "string",
            roomNumber: "string",
            teacherName: "string",
            phoneNumber: "string",
          },
        ],
      },
    ],
  },
};

// get all routines
const getAllRoutines = async (req, res) => {
  try {
    const allRoutines = await routineModel.find();
    if (allRoutines) {
      return res.status(200).send(allRoutines);
    } else {
      return res.status(400).json({
        message: "No Routines found!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// get a single routine
const getSingleRoutine = async (req, res) => {
  try {
    const singleRoutine = await routineModel.findOne({ id: req.params.id });
    if (singleRoutine) {
      return res.status(200).send(singleRoutine);
    } else {
      return res.status(400).json({
        message: "Routine not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// create a new routine
const createRoutine = async (req, res) => {
  try {
    const routineData = req.body.routineData;
    console.log(routineData);
    const newRoutine = new routineModel(routineData);
    await newRoutine.save();
    if (newRoutine) {
      return res.status(201).send(newRoutine);
    } else {
      return res.status(400).json({
        message: "Routine not saved!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update a routine
const updateInstituteInfo = async (req, res) => {
  try {
    const newInstituteInfo = req.body.instituteInfo;
    const updateInstituteInfo = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { instituteInfo: newInstituteInfo },
      },
      { new: true, runValidators: true }
    );

    if (updateInstituteInfo) {
      return res.status(200).json({
        message: "Institute information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Institute information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update class period
const updateClassPeriod = async (req, res) => {
  try {
    const newClassPeriods = req.body.classPeriods;
    const updateClassPeriods = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { classPeriods: newClassPeriods },
      },
      { new: true, runValidators: true }
    );

    if (updateClassPeriods) {
      return res.status(200).json({
        message: "Class periods information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Class periods information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update sunday class routine
const updateSundayRoutine = async (req, res) => {
  try {
    const newPeriods = req.body.periods;
    const updatePeriods = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { "weeklyRoutine.0.periods": newPeriods },
      },
      { new: true, runValidators: true }
    );

    if (updatePeriods) {
      return res.status(200).json({
        message: "Periods information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Periods information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update monday class routine
const updateMondayRoutine = async (req, res) => {
  try {
    const newPeriods = req.body.periods;
    const updatePeriods = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { "weeklyRoutine.1.periods": newPeriods },
      },
      { new: true, runValidators: true }
    );

    if (updatePeriods) {
      return res.status(200).json({
        message: "Periods information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Periods information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update Tuesday class routine
const updateTuesdayRoutine = async (req, res) => {
  try {
    const newPeriods = req.body.periods;
    const updatePeriods = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { "weeklyRoutine.2.periods": newPeriods },
      },
      { new: true, runValidators: true }
    );

    if (updatePeriods) {
      return res.status(200).json({
        message: "Periods information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Periods information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update Wednesday class routine
const updateWednesdayRoutine = async (req, res) => {
  try {
    const newPeriods = req.body.periods;
    const updatePeriods = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { "weeklyRoutine.3.periods": newPeriods },
      },
      { new: true, runValidators: true }
    );

    if (updatePeriods) {
      return res.status(200).json({
        message: "Periods information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Periods information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// update Thursday class routine
const updateThursdayRoutine = async (req, res) => {
  try {
    const newPeriods = req.body.periods;
    const updatePeriods = await routineModel.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { "weeklyRoutine.4.periods": newPeriods },
      },
      { new: true, runValidators: true }
    );

    if (updatePeriods) {
      return res.status(200).json({
        message: "Periods information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Periods information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllRoutines,
  getSingleRoutine,
  createRoutine,
  updateInstituteInfo,
  updateClassPeriod,
  updateSundayRoutine,
  updateMondayRoutine,
  updateTuesdayRoutine,
  updateWednesdayRoutine,
  updateThursdayRoutine,
};
