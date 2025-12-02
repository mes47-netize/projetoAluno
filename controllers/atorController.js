const Ator=require("../models/Ator");

class AtorController{
    static async relatorio(req, res){
        const status= req.query.s;
        const ator = await Ator.find();
        res.render("ator/relatorio",{ator, status});
    }


    static async detalhar(req, res){
        const ator= await Ator.findOne({cpf: req.params.cpf})
        res.render("ator/detalhar", {ator})
}

    static async cadastrarPost(req,res){
    const ator=req.body;
    console.log(ator);
    const novoAtor = new Ator ({

        cpf: ator.cpf,
        nomeator: ator.nomeator,
        biografia: ator.biografia
        
        })
    await novoAtor.save();
    res.redirect("/ator?s=1");
}

    static cadastrarGet(req,res){
        const ator={}
        res.render("ator/cadastrar",{ator})
    }

    
    static async excluir(req, res){
        const ator= await Ator.deleteOne({cpf: req.params.cpf})
        res.redirect("/ator?s=2")
}

    static async atualizar(req, res){
        const ator= await Ator.findOne({cpf: req.params.cpf})
        res.render("ator/cadastrar",{ator});
    }

    static async atualizarPost(req,res){
        const ator=req.body;
        await Ator.updateOne({_id: ator._id},{
            cpf: ator.cpf,
            nomeator: ator.nomeator,
            biografia: ator.biografia
        })
        res.redirect("/ator?s=3");
    }
}
module.exports = AtorController;