const Usuario = require("../models/usuario.model");

module.exports = {
  async read(req, res) {
    const usuario = await Usuario.find();

    return res.json(usuario);
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
      user =  Usuario.create(data)
    }
    return res.status(201).json("Usuário criado com sucesso");
  },

  async delete(req, res) {
    const { id } = req.params;
    const usuarioDel = Usuario.findOneAndDelete({ _id: id });
    if (usuarioDel) {
      return res.json(usuarioDel);
    }
    return res.status(401).json({ err: "Registro não encontrado" });
  },
};
