const Joi = require("joi");

const contactSchema = Joi.object({
  contact: Joi.object({
    fristName: Joi.string().min(2).max(25).required(),
    surName: Joi.string().min(2).max(25),
    profession: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    phone: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    email: Joi.string().email().required(),
    linkeind: Joi.string().uri().required(),
    protfolio: Joi.string().uri().required(),
    github: Joi.string().uri().required(),
  }),
});

const objectSchema = Joi.object({ object: Joi.string().required() });

const educationSchema = Joi.object({
  education: Joi.object({
    instituteName: Joi.string().required(),
    location: Joi.string().required(),
    degree: Joi.string().required(),
    graduationStartDate: Joi.date().required(),
    graduationEndDate: Joi.date().required(),
  }),
});

const skillsSchema = Joi.object({
  skills: Joi.object({
    expertise: Joi.array().items(Joi.string()).required(),
    comfortable: Joi.array().items(Joi.string()).required(),
    tools: Joi.array().items(Joi.string()).required(),
  }),
});

const projectSchema = Joi.object({
  projectName: Joi.string().required(),
  liveLink: Joi.string().uri().required(),
  frontendRepoLink: Joi.string().uri().required(),
  backendRepoLink: Joi.string().uri().required(),
  discription: Joi.string().required(),
  utilizedTechnologies: Joi.array().items(Joi.string()).required(),
  keyAttributes: Joi.array().items(Joi.string()).required(),
});

const projectsSchema = Joi.object({
  projects: Joi.object({
    project_1: projectSchema,
    project_2: projectSchema,
    project_3: projectSchema,
  }),
});

const languagesSchema = Joi.object({
  languages: Joi.object({
    bangla: Joi.number().integer().min(0).max(100).required(),
    english: Joi.number().integer().min(0).max(100).required(),
    hindi: Joi.number().integer().min(0).max(100).required(),
  }),
});

const createResumeSchema = Joi.object({
  resumeData: Joi.object({
    //contact
    contact: Joi.object({
      fristName: Joi.string().min(2).max(25).required(),
      surName: Joi.string().min(2).max(25),
      profession: Joi.string().required(),
      city: Joi.string().required(),
      country: Joi.string().required(),
      phone: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .required(),
      email: Joi.string().email().required(),
      linkeind: Joi.string().uri().required(),
      protfolio: Joi.string().uri().required(),
      github: Joi.string().uri().required(),
    }).required(),
    //object
    object: Joi.string().required(),

    //education
    education: Joi.object({
      instituteName: Joi.string().required(),
      location: Joi.string().required(),
      degree: Joi.string().required(),
      graduationStartDate: Joi.date().required(),
      graduationEndDate: Joi.date().required(),
    }).required(),
    //skills
    skills: Joi.object({
      expertise: Joi.array().items(Joi.string()).required(),
      comfortable: Joi.array().items(Joi.string()).required(),
      tools: Joi.array().items(Joi.string()).required(),
    }).required(),

    //projects
    projects: Joi.object({
      project_1: projectSchema.required(),
      project_2: projectSchema.required(),
      project_3: projectSchema.required(),
    }).required(),
    //languages
    languages: Joi.object({
      bangla: Joi.number().integer().min(0).max(100).required(),
      english: Joi.number().integer().min(0).max(100).required(),
      hindi: Joi.number().integer().min(0).max(100).required(),
    }).required(),
  }),
});

module.exports = {
  createResumeSchema,
  contactSchema,
  educationSchema,
  skillsSchema,
  projectsSchema,
  languagesSchema,
  objectSchema,
};
