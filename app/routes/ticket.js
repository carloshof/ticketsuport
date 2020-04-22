module.exports = function (app){

app.get('/newticket',function(req,res){
	app.app.controllers.ticket.newticket(app,req,res);


});

app.post('/newticket',function(req,res){
	app.app.controllers.ticket.createticket(app,req,res);


});


app.get('/tickets',function(req,res){
	app.app.controllers.ticket.tickets(app,req,res);

});



}