const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const contactSchema = new mongoose.Schema({
  fristName: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  linkeind: {
    type: String,
    required: true,
  },
  protfolio: {
    type: String,
  },
  github: {
    type: String,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  instituteName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  graduationStartDate: {
    type: String,
    required: true,
  },
  graduationEndDate: {
    type: String,
    required: true,
  },
});

const skillsSchema = new mongoose.Schema({
  expertise: {
    type: [String],
    required: true,
  },
  comfortable: {
    type: [String],
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  frontendRepoLink: {
    type: String,
    required: true,
  },
  backendRepoLink: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  utilizedTechnologies: {
    type: [String],
    required: true,
  },
  keyAttributes: {
    type: [String],
    required: true,
  },
});
const projectsSchema = new mongoose.Schema({
  project_1: projectSchema,
  project_2: projectSchema,
  project_3: projectSchema,
});

const languagesSchema = new mongoose.Schema({
  bangla: {
    type: Number,
    required: true,
  },
  english: {
    type: Number,
    required: true,
  },
  hindi: {
    type: Number,
    required: true,
  },
});

const resumeSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4(),
  },
  contact: contactSchema,
  object: {
    type: String,
    required: true,
  },
  education: educationSchema,
  skills: skillsSchema,
  projects: projectsSchema,
  languages: languagesSchema,
  createdOn: {
    type: Date,
    default: new Date().toDateString(),
  },
});

module.exports = mongoose.model("resumes", resumeSchema);
