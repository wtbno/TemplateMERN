//configuração do mongoose

const mongoose = require("mongoose");

const dbConfig = "mongodb://localhost:27017/template-mern";

const connection = mongoose.connect(
  dbConfig,
  {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB connected");
    }
  }
);

module.exports = connection;
