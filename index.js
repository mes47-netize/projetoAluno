const express= require("express");
const app=express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

require('dotenv/config');

const session = require("express-session");

app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
    
    }));

const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const atorRoutes = require("./routes/atorRouters");
app.use(atorRoutes);

const filmeRoutes = require("./routes/filmeRouters");
app.use(filmeRoutes);

const usuarioRoutes = require("./routes/usuarioRouters");
app.use(usuarioRoutes);

app.get("/", function(req,res){
    if(req.session.usuario != null){
        res.render("index");
    }
    else{
        res.redirect("/usuarios/login")
    }

});

app.use(function(req,res){
    res.status(404).render("404");
});

app.listen(process.env.PORT, function(){
    console.log("Rodando");
});