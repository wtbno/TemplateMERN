const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    const annotationsList = await Annotations.find();

    return res.json(annotationsList);
  },

  async create(req, res) {
    const { name, email, password, birthDate } = req.body;

    if(!name || !email || !password || !birthDate){
        return res.status(400).json({err:"Preencha todos os campos"})
    }
    const annotationCreated = await Annotations.create({
      name,
      email,
      password,
      birthDate,
    });

    return res.json(annotationCreated);


   
  },
};
