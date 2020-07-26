//import npm package express
let express = require("express");

//import npm package body-parser to parse incoming requests. 
let bodyParser = require("body-parser");

//import node builtin package path
let path = require("path");

//use port defined by deployment site like Heroku or 8080 if its localhost
let PORT = process.env.PORT || 8080;

//create the server express
let app = express();

//parse the application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse application/json
app.use(bodyParser.json());

//include html_routes in the server file and 
//the app that we use is express
require("./routing/html_routes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});


