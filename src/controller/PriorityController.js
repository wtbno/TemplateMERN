const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    const priority = req.query;

    const priorityNotes = await Annotations.find(priority);

    return res.json(priorityNotes);
  },

  async update(req, res) {
    const { id } = req.params;

    const annotations = await Annotations.findOne({ _id: id });

    if (annotations.priority) {
      annotations.priority = false;
    } else {
      annotations.priority = true;
    }

    await annotations.save();

    return res.json(annotations)
  },
};
