var path = require("path");

var fs = require("fs");

var db = require("../Develop/db/db.json");

var notes = [];

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", function(error, data) {
            res.json(data)
        });
    });

    app.get("/api/notes", function(req, res) {
        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", function(error, data) {
            res.json(data)
        });


    app.delete("/api/notes/:id", function(req, res) {
        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", function(error, data) {
            //check syntax of notes and console log
            
            notes = JSON.parse(data);
            console.log(notes);
        });
   
        //filter out noteId that I am looking for
        //write the new notes that don't have the noteId that does not have the file
   
   
    }) 

        

};
