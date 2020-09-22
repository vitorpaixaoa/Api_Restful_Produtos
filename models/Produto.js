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
    fabricante: {tyepe: String},
    puantidade: {type: Number},
    preco: {type: Number}
})