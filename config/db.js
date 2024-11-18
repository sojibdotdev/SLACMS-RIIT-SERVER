const mongoose = require("mongoose");
const config = require("./config");

const db_url = config.db.url;

mongoose
  .connect(db_url)
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
