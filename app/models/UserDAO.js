function UserDAO(connection){
	this._connection = connection();
};

UserDAO.prototype.CreateUser = function(data){
	this._connection.open(function(err,mongoclient){
		mongoclient.collection('users',function(err,collection){
			collection.insert(data);

			mongoclient.close();

		});
	});
}


UserDAO.prototype.autenticar = function(user,req,res){
	this._connection.open(function(err,mongoclient){
		mongoclient.collection('users',function(err,collection){
			collection.find(user).toArray(function(err,result){

				if(result[0] != undefined)
				{
					req.session.autenticado = true;
					req.session.usuario = result[0].user;
				}


			});




		});

	});





}