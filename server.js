const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require("./controller/api"));
app.use(require("./controller/views"));

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
