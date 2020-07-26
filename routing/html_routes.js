//html-routes is to help direct the user

//import node builtin package path
let path = require("path");

//This will help to bring data from here to other files
module.exports = function (app){

    //whenever we get / as the url, then execute the function

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/index.html"));        
    });

    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    });


}