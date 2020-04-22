function TicketDAO(connection){
	this._connection = connection();


}


TicketDAO.prototype.NewTicket = function(ticket){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("tickets", function(err, collection){
			collection.insert(ticket);

			mongoclient.close();
		});
	});
}

TicketDAO.prototype.UpdateTicket = function(res,req){
	this._connection.open(function(err,mongoclient){
		mongoclient.collection("tickets",function(err,collection){
			collection.update({_id:objectId(req.params.id)},
			{$push : req.params.data},
			{},function(err,records){
					if(err)
					res.json(err);
					else
					res.json(records);

					mongoclient.close();

				});
			});
		});
}






