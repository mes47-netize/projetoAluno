const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const atorSchema= Schema({
    cpf: Number,
    nomeator: String,
    biografia: String
});

module.exports=mongoose.model("Ator", atorSchema);




