const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const filmeSchema= Schema({
    cdg: Number,
    nomefilme: String,
    anolancamento: String
});

module.exports=mongoose.model("Filme", filmeSchema);