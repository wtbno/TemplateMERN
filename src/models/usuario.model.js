const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    id: "",
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
DataSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

DataSchema.pre("findOneAndUpdate", function (next) {
  var psw = this.getUpdate().password + "";

  if (psw.length < 55) {
    this.getUpdate().password = bcrypt.hashSync(psw, 10);
  }

  next();
});

const usuarios = mongoose.model("Novo_usuario", DataSchema);

module.exports = usuarios;
