var express = require('express');
var app = express();
var jade = require('jade');

app.set('views', __dirname + '/');
app.set('view engine', 'jade');

app.get('/', function(req, res) {

  
  var ipaddress = (req.headers['x-forwarded-for'] || '').split(',')[0]  || req.connection.remoteAddress;;
	var language =  (req.headers["accept-language"]).split(',')[0];
	var software = (req.headers['user-agent']).split(' ')[1] + " " + (req.headers['user-agent']).split(' ')[2] + (req.headers['user-agent']).split(' ')[3] + " " +(req.headers['user-agent']).split(' ')[4];
  software = software.replace('(','').replace(')','');

	var output = '{"ipaddress": ' + '"' + ipaddress + '"' + ', "language": ' + '"' + language + '"' + ', "software": ' + '"' + software + '"}';
  	res.render('index', { title: 'OUTPUT', message: output });

});


app.listen(process.env.PORT || 3000)
console.log("Server is listening you!");

