const Usuario = require("../models/usuario.model");

module.exports = {
  async index(req, res) {
    const usuario = await Usuario.find();

    return res.json(usuario);
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOne({ _id });
    res.json(user);
  },

  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ err: "Preencha todos os campos" });
    }

    const usuario = await Usuario.create({
      name,
      email,
      password,
    });
    const data = {};
    const user = Usuario.findOne({ email });
    if (!usuario) {
      data = { name, email, password };
      user = Usuario.create(data);
    }
    return res.status(201).json("Usuário criado com sucesso");
  },

  async delete(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findByIdAndDelete({_id});
    return res.json(user);
  },
};
