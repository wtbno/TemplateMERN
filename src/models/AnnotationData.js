const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthDate: String
});



module.exports = mongoose.model('Annotation', AnnotationDataSchema)