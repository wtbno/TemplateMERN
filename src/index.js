const express = require("express");
const app = express();
require('./config/dbConfig')

//Leitura de json
app.use(express.json());



app.get('/', (req, res) => {
    return res.send('Hello Woooord!!!')
});

app.listen(3333);
