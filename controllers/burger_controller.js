// require express framework
var express = require("express");
//require burger ==> orm ==> connection
var burger = require("../models/burger.js");
//use the express router option
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
// root route - this runs when page is loaded or get root
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        //context
        var contextObject = {
            burgers: data
        };
        // console.log(contextObject);
        res.render("index", contextObject);
    });
});

//create a new burger
//using body parser aaa.body.bbbb
router.post("/", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function () {
            res.redirect("/");
        });
});

//Devour a burger - change devoured from false to true
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    // console.log("condition ", condition);

    burger.updateOne({devoured:true}, condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
// see express router
module.exports = router;
