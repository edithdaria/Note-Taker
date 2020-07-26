//this is for our data to help determine what data to display
// and post data to server

//import node builtin package path
let path = require("path");

//This will help to bring data from here to other files
module.exports = function (app){

    //whenever we get / as the url, then execute the function
    id = 0;
    notes = [ {"id": id++, "title": "test", "text": "ok"}];

    app.get("/api/notes", function(req, res){
        res.send(notes);
    });

    app.post("/api/notes", function(req, res){
        var note = req.body;
        note.id = id++;
        notes.push(note);
    });
    
    app.delete("/api/notes/:id", function(req, res){
        notes = notes.filter(i => i.id != req.params.id);
    });


        //whenever we get / as the url, then execute the function


        app.get("/assets/js/index.js", function(req, res){
            res.sendFile(path.join(__dirname + "/../public/assets/js/index.js"));
        });
        
        app.get("/assets/css/styles.css", function(req, res){
            res.sendFile(path.join(__dirname + "/../public/assets/css/styles.css"));
        });
    

}
