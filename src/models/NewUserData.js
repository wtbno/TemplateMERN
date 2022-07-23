const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const NewUserDataSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    birthDate: String,
  },
  {
    timestamps: true,
  }
);
NewUserDataSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
});
module.exports = mongoose.model("Novo_usuario", NewUserDataSchema);
