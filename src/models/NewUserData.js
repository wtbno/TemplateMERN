const mongoose = require('mongoose');

const NewUserDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthDate: String
});



module.exports = mongoose.model('Novo_usuario', NewUserDataSchema)