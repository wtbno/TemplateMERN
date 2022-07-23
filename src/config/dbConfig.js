//configuração do mongoose

const mongoose = require("mongoose");

const dbConfig =("mongodb://localhost:27017/template-mern")
  
//"mongodb+srv://bruno:JlLa09iIHGL84WYb@cluster0.noywkjm.mongodb.net/?retryWrites=true&w=majority";
//Conexão do backend com o mongodb
const connection = mongoose.connect(
  dbConfig,
  {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  },
  function (err) {
  if(err){
    console.log(err);
  }else{console.log('MongoDB connected');}}
);

module.exports = connection;
