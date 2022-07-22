const express = require("express");
const app = express();
require('./config/dbConfig')
const routes = require('../src/routes/routes')



//Leitura de json
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {

    return res.json({
      name:"Bruno",
      prof:"Desenvolvedor",
    })
})


app.listen(3333);
