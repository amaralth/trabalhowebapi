// arquivo principal da api
/*
        API PARA PETSHOP
*/
require('dotenv').config();
const express = require('express')
const routes = require('./routes/routes')
const port = process.env.PORT

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", routes);


app.listen(port, () => {
    console.log("Rodando na porta: " + port);
})