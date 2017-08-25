var express = require('express');
var app = express();
var path = require('path');
var jade = require('jade');
var bodyParser = require('body-parser')

app.set('views', __dirname + '/');
app.set('view engine', 'jade');

/*app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.htm'));
});
*/

app.get('/:id', function(req, res) {

	var unix_output = "first";
	var natural_output = "second";

	var output = '{ "unix": ' + unix_output + ', "natural": ' + '"' + natural_output + '" }';
  	res.render('index', { title: 'OUTPUT', head: "OUTPUT", message: output });

    //res.send(output);
});


// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /
app.post('/', function (req, res) {
  const body = req.body
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${body} to Express`)
})


app.listen(process.env.PORT || 3000)
console.log("Server is listening you!");

