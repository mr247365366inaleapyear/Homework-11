const path = require("path");

const fs = require("fs");

const db = require("../Develop/db/db.json");

const notes = [];

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", (error, data) => {
            res.json(data)
        });
    });

    app.get("/api/notes", (req, res) => {
        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", (error, data) => {
            res.json(data)
        });


    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", (error, data) => {
            //check syntax of notes and console log
            
            notes = JSON.parse(data);
            console.log(notes);
        });
   
        //filter out noteId that I am looking for
        //write the new notes that don't have the noteId that does not have the file
   
   
    }) 

        

};
