let listaCarros = ["Fusca","Gol","Relam Markinhus", "Brasilia", "Marea Turbo 3CV"]
class HomeController{

    teste(req, res){
        res.render("home.ejs")
    }

    carros(req, res){
        res.render("carros.ejs",{listaCarrosHtml: listaCarros});
    }

    cadastro(req, res){
        res.render("cadastro.ejs");
    }
    cadastroPost(req, res){
        if(req.body.carro !="")
        {
            listaCarrosHtml.push(req.body.carro);
            msg = "Carro cadastrado!"
        }
        else{
            msg = "Informe o nome do carro";
        }
        res.render("cadastro", {retorno: msg});
    }
}

module.exports = HomeController;