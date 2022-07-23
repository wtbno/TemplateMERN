const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 5000;




const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json())

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


app.listen(port, function(){
  console.log( `Server runing on port ${port}`);
});
