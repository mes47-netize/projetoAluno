const Filme=require("../models/Filme");

class FilmeController{
    static async relatorio(req, res){
        const status= req.query.s;
        const filme = await Filme.find();
        res.render("filme/relatorio",{filme, status});
    }


    static async detalhar(req, res){
        const filme= await Filme.findOne({cdg: req.params.cdg})
        res.render("filme/detalhar", {filme})
}

    static async cadastrarPost(req,res){
    const filme=req.body;
    console.log(filme);
    const novoFilme = new Filme ({

        cdg: filme.cdg,
        nomefilme: filme.nomefilme,
        anolancamento: filme.anolancamento
        
        })
    await novoFilme.save();
    res.redirect("/filme?s=1");
}

    static cadastrarGet(req,res){
        const filme={}
        res.render("filme/cadastrar",{filme})
    }

    
    static async excluir(req, res){
        const filme= await Filme.deleteOne({cdg: req.params.cdg})
        res.redirect("/filme?s=2")
}

    static async atualizar(req, res){
        const filme= await Filme.findOne({cdg: req.params.cdg})
        res.render("filme/cadastrar",{filme});
    }

    static async atualizarPost(req,res){
        const filme=req.body;
        await Filme.updateOne({_id: filme._id},{
            cdg: filme.cdg,
            nomefilme: filme.nomefilme,
            anolancamento: filme.anolancamento
            
        })
        res.redirect("/filme?s=3");
    }
}
module.exports = FilmeController;