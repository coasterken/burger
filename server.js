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
// requiring routes stored in catsController
// See express router
var routes = require("./controllers/burger_controller.js");

//Load the page
app.use("/", routes);

//create listener
app.listen(port);
