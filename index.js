/*실행하는 소스*/

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var router = require('./router')(app);

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(5000, function() {
	console.log("here");
});
