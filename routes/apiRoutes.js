var dbNotes = require("../db/db.json");
const fs = require('fs');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", dbNotes, function (err) {
            if (err) throw err;
        });
        res.json(dbNotes);
    });

    app.post("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", dbNotes, function (err) {
            if (err) throw err;
        });
        //look into the uuid npm package

        //assign the info to a new object

        //push the new object/note to the db.json

        //write to the file

        res.json(dbNotes);
    });

    app.delete("/api/notes/:id", function (req, res) {
        //read the file

        //grab the note ID from the params

        //filter through your db.json
        //use for loop, look into splice
        //make if condition for if the id's match, splice out note and write file

        //return response with db.json
    });
};

