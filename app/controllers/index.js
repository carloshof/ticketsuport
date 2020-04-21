module.exports.index = function(app,req,res){
	res.render('index');

}


module.exports.autenticar = function(app,req,res)
{
	var dados = req.body;
	req.assert('user','Usuário vazio, favor preencher.').notEmpty();
	req.assert('password','Senha vazia, favor preencher.').notEmpty();

	var err = req.validationErrors();

	if(err){
		res.render("index",{validation:err})
		return;
	}
	//var connection = app.config.dbConnection;

}