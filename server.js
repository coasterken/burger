//require all the necessary packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

//define express handle
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// express will just serve these files - will not look at routes
app.use(express.static("public"));

// auto parses post body
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method
app.use(methodOverride("_method"));

// Setup Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// node server.js ==> burger_controller.js ==> burger.js ==> orm.js ==> connection.js
// burger_controller has all routes and executes appropriate action for each, use 
//      methods from burger.js
// burger.js has burger object with methods which interact with db - select, insert, etc
//      uses sql states built in orm.js
// orm.js contains the orm object with methods that actually build sql statements (select * from)
//      orm gets db connection from connecton.js
// connection.js - sets up db connection (db, user, pwd, etc) in var called connection
// requiring routes stored in burger_Controller
// See express router
var routes = require("./controllers/burger_controller.js");

//Bind routes in burger_controller to root
app.use("/", routes);

//create listener
app.listen(port);
