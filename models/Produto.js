const mongoose = require("mongoose");

//Produto
/*
    Nome
    Fabricante
    Quantidade
    Preco
*/
mongoose.model("Produto",{

    nome:{type: String},
    fabricante: {type: String},
    quantidade: {type:Number},
    preco: {type:Number}
})