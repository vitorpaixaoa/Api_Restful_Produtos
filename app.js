const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


//Configurar body parser
app.use(bodyParser.json());

//MONGODB
mongoose.connect("mongodb+srv://root:root@apirest.rb8zx.mongodb.net/api_rest?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true },() =>{
    console.log("Banco de dados conectado");
})

//Carregando model de produto
require("./models/Produto")
const Produto = mongoose.model("Produto");

//EndPoints 

    //cadastros
    app.post();


app.listen(8080,() =>{
    console.log("API rodando");
});