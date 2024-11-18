const Joi = require("joi");

exports.resumeValidation = (schema, property) => {
  // const resume = {
  //   id: "1114",
  //   contact: {
  //     fristName: "shobuj2",
  //     surName: "Sorkar",
  //     profession: "Full Stack Web Developer",
  //     city: "Bogura",
  //     country: "Bangladesh",
  //     phone: "01309919260",
  //     email: "skshobuj988@gamil.com",
  //     linkeind: "https://mdshobuj-dev.netlify.app/",
  //     protfolio: "https://mdshobuj-dev.netlify.app/",
  //     github: "https://mdshobuj-dev.netlify.app/",
  //   },
  //   object:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue justo, ac dapibus nibh ullamcorper et",
  //   education: {
  //     instituteName: "Govt Sha-sultan College",
  //     location: "Bogura",
  //     degree: "BA Honours",
  //     graduationStartDate: "12-02-2020",
  //     graduationEndDate: "11-09-2024",
  //   },
  //   skills: {
  //     expertise: ["node", "express"],
  //     comfortable: ["node", "mongoDB"],
  //     tools: ["vsCode", "post man"],
  //   },
  //   projects: {
  //     project_1: {
  //       projectName: "Dream Lead Agency",
  //       liveLink: "https://mdshobuj-dev.netlify.app/",
  //       frontendRepoLink: "https://mdshobuj-dev.netlify.app/",
  //       discription:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue justo, ac dapibus nibh ullamcorper et",
  //       utilizedTechnologies: ["React", "Next Js"],
  //       keyAttributes: [
  //         "This is good projects",
  //         "In this projects we use all latest technology",
  //         "This is my frist full stack project",
  //       ],
  //     },
  //     project_2: {
  //       projectName: "Job Portal",
  //       liveLink: "https://mdshobuj-dev.netlify.app/",
  //       frontendRepoLink: "https://mdshobuj-dev.netlify.app/",
  //       discription:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin augue justo, ac dapibus nibh ullamcorper et",
  //       utilizedTechnologies: ["React", "Next Js"],
  //       keyAttributes: [
  //         "This is good projects",
  //         "In this projects we use all latest technology",
  //         "This is my frist full stack project",
  //       ],
  //     },
  //   },
  //   languages: {
  //     bangla: 95,
  //     english: 70,
  //     hindi: 60,
  //   },
  // };
  return (req, res, next) => {
    const { error } = schema.validate(req[property], {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (error) {
      const errorList = error.details.map((err) => err.message);
      return res.status(201).json({
        status: false,
        message: "Fill the form again with correct information",
        errorList: errorList,
      });
    }
    next();
  };
};
