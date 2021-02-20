const path = require("path");

const fs = require("fs");

const db = require("../Develop/db/db.json");

const notes = [];

module.exports = (app) => {
  app.get("/api/notes", (request, result) => {
    fs.readFile(
      path.join(__dirname, "../Develop/db/db.json"),
      "utf8",
      (error, data) => {
        res.json(data);
      }
    );
  });

  app.post("/api/notes", (req, res) => {
    fs.readFile(
      path.join(__dirname, "../Develop/db/db.json"),
      "utf8",
      (error, data) => {
        res.json(data);
      }
    );

    app.delete("/api/notes/:id", (req, res) => {
      fs.readFile(
        path.join(__dirname, "../Develop/db/db.json"),
        "utf8",
        (error, data) => {
          notes = JSON.parse(data);
          console.log(notes);
        }
      );
    });
  });
};
