
var express = require('express');

var methodOverride = require('method-override');

var bodyParser = require('body-parser')


var port = process.env.PORT || 3000;

var app = express();

// serve 'static' content for the app from the 'public' folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// applying method-override
app.use(methodOverride('_method'));

//applying handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js')

app.use('/', routes);

app.listen(port);