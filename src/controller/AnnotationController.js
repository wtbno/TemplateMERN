const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    const annotationsList = await Annotations.find();

    return res.json(annotationsList);
  },

  async create(req, res) {
    const { name, email, password, birthDate } = req.body;

    if (!name || !email || !password || !birthDate) {
      return res.status(400).json({ err: "Preencha todos os campos" });
    }
    const annotationCreated = await Annotations.create({
      name,
      email,
      password,
      birthDate,
    });
    return res.status(201).json("Usuário criado com sucesso");
  },

  async delete(req, res) {
    const { id } = req.params;
    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });
    if (annotationDeleted) {
      return res.json(annotationDeleted);
    }
    return res.status(401).json({ err: "Registro não encontrado" });
  },
};
