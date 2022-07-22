//configuração do mongoose

const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://bruno:JlLa09iIHGL84WYb@cluster0.noywkjm.mongodb.net/?retryWrites=true&w=majority"

//Conexão do backend com o mongodb
const connection = mongoose.connect(dbConfig, {
    useNewUrlParser:'true',
    useUnifiedTopology:'true'
})

module.exports = connection;
