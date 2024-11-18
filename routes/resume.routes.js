const {
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
} = require("../controllers/resume.controller");
const { resumeValidation } = require("../validation");
const {
  createResumeSchema,
  contactSchema,
  objectSchema,
  educationSchema,
  skillsSchema,
  projectsSchema,
  languagesSchema,
} = require("../validation/schemas");

const Router = require("express").Router();

// get all resume data
Router.get("/", getAllResume);

// get a single resume by id
Router.get("/:id", getSingleResume);

// create a new resume
Router.post("/", resumeValidation(createResumeSchema, "body"), createResume);

//delete resume by id
Router.delete("/:id", deleteResume);

// Update contact information
Router.put(
  "/:id/contact",
  resumeValidation(contactSchema, "body"),
  updateContact
);

// Update object information
Router.put("/:id/object", resumeValidation(objectSchema, "body"), updateObject);

// Update education information
Router.put(
  "/:id/education",
  resumeValidation(educationSchema, "body"),
  updateEducation
);

// Update skills information
Router.put("/:id/skills", resumeValidation(skillsSchema, "body"), updateSkills);

// Update projects information
Router.put(
  "/:id/projects",
  resumeValidation(projectsSchema, "body"),
  updateProjects
);

// Update languages information
Router.put(
  "/:id/languages",
  resumeValidation(languagesSchema, "body"),
  updateLanguages
);

module.exports = Router;
