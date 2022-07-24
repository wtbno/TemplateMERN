const NewUser = require("../models/NewUserData");

module.exports = {
  async read(req, res) {
    const newUser = await NewUser.find();

    return res.json(newUser);
  },

  async create(req, res) {
    const { name, email, password, birthDate } = req.body;

    if (!name || !email || !password || !birthDate) {
      return res.status(400).json({ err: "Preencha todos os campos" });
    }
    const newUser = await NewUser.create({
      name,
      email,
      password,
      birthDate,
    });
    return res.status(201).json("Usuário criado com sucesso");
  },

  async delete(req, res) {
    const { id } = req.params;
    const newUserDel = NewUser.findOneAndDelete({ _id: id });
    if (newUserDel) {
      return res.json(newUserDel);
    }
    return res.status(401).json({ err: "Registro não encontrado" });
  },
};
