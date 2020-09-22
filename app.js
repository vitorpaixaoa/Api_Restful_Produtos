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
    app.post("/produto",(req, res) => {

        if( req.body.nome != undefined &&
            req.body.preco != undefined &&
            req.body.fabricante != undefined &&
            req.body.quantidade != undefined ) {
                

                var produto = new Produto({
                    nome: req.body.nome,
                    fabricante: req.body.fabricante,
                    quantidade: req.body.quantidade,
                    preco: req.body.preco
                });
                produto.save().then(() => {
                    res.statusCode = 201
                    res.send("Item adicionado");
                }).catch((erro)=> {
                    if(erro){
                        throw erro; //impedir q o sistema caia se acontecer um erro.
                    }
                    // Aconteceu alguma falha
                    res.statusCode = 417
                    res.send();
        
                })
            } else{
                res.statusCode = 406
                res.send("Todos os dados precisam ser preenchidos.");
            }
    });


app.listen(8080,() =>{
    console.log("API rodando");
});