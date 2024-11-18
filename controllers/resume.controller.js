const Resumes = require("../models/resume.model");

//get all resume controller
const getAllResume = async (req, res) => {
  try {
    const allResume = await Resumes.find();
    if (allResume) {
      return res.status(200).send(allResume);
    } else {
      return res.status(400).json({
        message: "No resume found!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// get a single resume controller
const getSingleResume = async (req, res) => {
  try {
    const singleResume = await Resumes.findOne({ id: req.params.id });
    if (singleResume) {
      return res.status(200).send(singleResume);
    } else {
      return res.status(400).json({
        message: "Resume not found!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// create a new resume controller
const createResume = async (req, res) => {
  try {
    // const resume = {
    //   resumeData: {
    //     contact: {
    //       fristName: "shobuj2",
    //       surName: "Sorkar",
    //       profession: "Full Stack Web Developer",
    //       city: "Bogura",
    //       country: "Bangladesh",
    //       phone: "01309919260",
    //       email: "skshobuj988@gamil.com",
    //       linkeind: "https://mdshobuj-dev.netlify.app/",
    //       protfolio: "https://mdshobuj-dev.netlify.app/",
    //       github: "https://mdshobuj-dev.netlify.app/",
    //     },
    //     object:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue justo, ac dapibus nibh ullamcorper et",
    //     education: {
    //       instituteName: "Govt Sha-sultan College",
    //       location: "Bogura",
    //       degree: "BA Honours",
    //       graduationStartDate: "12-02-2020",
    //       graduationEndDate: "11-09-2024",
    //     },
    //     skills: {
    //       expertise: ["node", "express"],
    //       comfortable: ["node", "mongoDB"],
    //       tools: ["vsCode", "post man"],
    //     },
    //     projects: {
    //       project_1: {
    //         projectName: "Dream Lead Agency",
    //         liveLink: "https://mdshobuj-dev.netlify.app/",
    //         frontendRepoLink: "https://mdshobuj-dev.netlify.app/",
    //         discription:
    //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue justo, ac dapibus nibh ullamcorper et",
    //         utilizedTechnologies: ["React", "Next Js"],
    //         keyAttributes: [
    //           "This is good projects",
    //           "In this projects we use all latest technology",
    //           "This is my frist full stack project",
    //         ],
    //       },
    //       project_2: {
    //         projectName: "Job Portal",
    //         liveLink: "https://mdshobuj-dev.netlify.app/",
    //         frontendRepoLink: "https://mdshobuj-dev.netlify.app/",
    //         discription:
    //           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue justo, ac dapibus nibh ullamcorper et",
    //         utilizedTechnologies: ["React", "Next Js"],
    //         keyAttributes: [
    //           "This is good projects",
    //           "In this projects we use all latest technology",
    //           "This is my frist full stack project",
    //         ],
    //       },
    //     },
    //     languages: {
    //       bangla: 95,
    //       english: 70,
    //       hindi: 60,
    //     },
    //   },
    // };

    const resumeData = req.body.resumeData;
    console.log(resumeData);
    const newResume = new Resumes(resumeData);
    await newResume.save();
    if (newResume) {
      return res.status(201).send(newResume);
    } else {
      return res.status(400).json({
        message: "Resume not saved!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//delete resume controller
const deleteResume = async (req, res) => {
  try {
    const deleteResume = await Resumes.deleteOne({ id: req.params.id });
    if (deleteResume) {
      return res.status(200).json({
        message: "The resume was successfully deleted.",
      });
    } else {
      return res.status(400).json({
        message: "The resume was not deleted.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update contact information
const updateContact = async (req, res) => {
  try {
    const newContact = req.body.contact;
    const updateContact = await Resumes.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { contact: newContact },
      },
      { new: true, runValidators: true }
    );

    if (updateContact) {
      return res.status(200).json({
        message: "Contact information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Contact information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update object information
const updateObject = async (req, res) => {
  try {
    const newObject = req.body.object;
    const updateObject = await Resumes.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { object: newObject },
      },
      { new: true, runValidators: true }
    );

    if (updateObject) {
      return res.status(200).json({
        message: "Object information has been successfully updated",
      });
    } else {
      return res.status(400).json({
        message: "Object information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update education information
const updateEducation = async (req, res) => {
  try {
    const newEducation = req.body.education;
    const updateEducation = await Resumes.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { education: newEducation },
      },
      { new: true, runValidators: true }
    );

    if (updateEducation) {
      return res.status(200).json({
        message: "Education information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Education information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update skills information
const updateSkills = async (req, res) => {
  try {
    const newSkills = req.body.skills;
    const updateSkills = await Resumes.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { skills: newSkills },
      },
      { new: true, runValidators: true }
    );

    if (updateSkills) {
      return res.status(200).json({
        message: "Skills information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Skills information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update projects information
const updateProjects = async (req, res) => {
  try {
    const newProjects = req.body.projects;
    const updateProjects = await Resumes.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { projects: newProjects },
      },
      { new: true, runValidators: true }
    );

    if (updateProjects) {
      return res.status(200).json({
        message: "Projects information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Projects information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update languages information
const updateLanguages = async (req, res) => {
  try {
    const newLanguages = req.body.languages;
    const updateLanguages = await Resumes.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: { languages: newLanguages },
      },
      { new: true, runValidators: true }
    );

    if (updateLanguages) {
      return res.status(200).json({
        message: "Languages information has been successfully updated.",
      });
    } else {
      return res.status(400).json({
        message: "Languages information not updated.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllResume,
  getSingleResume,
  createResume,
  deleteResume,
  updateContact,
  updateObject,
  updateEducation,
  updateSkills,
  updateProjects,
  updateLanguages,
};
