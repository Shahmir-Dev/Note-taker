var dbNotes = require("../db/db.json");
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");

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
        let id = { id: uuidv4() };
        //assign the info to a new object
        const newNote = Object.assign(id, req.body);
        //push the new object/note to the db.json
        dbNotes.push(newNote);
        //write to the file
        fs.writeFile("./db/db.json", JSON.stringify(dbNotes, null, 1), "utf-8", function (err) {
            if (err) throw err;
        });

        res.json(dbNotes);
    });

    app.delete("/api/notes/:id", function (req, res) {
        //read the file
        fs.readFile("./db/db.json", dbNotes, function (err) {
            if (err) throw err;
        });
        //grab the note ID from the params
        const noteId = req.params.id;
        //filter through your db.json
        //use for loop, look into splice
        //make if condition for if the id's match, splice out note and write file
        for (let i = 0; i < dbNotes.length; i++) {
            let noteToBeDeleted = dbNotes[i];
            if (noteId.indexOf(noteToBeDeleted.id) !== -1) {
                dbNotes.splice(i, 1);
                i--;
                fs.writeFile("./db/db.json", JSON.stringify(dbNotes, null, 1), "utf-8", function (err) {
                    if (err) throw err;
                });
            }
        }
        //return response with db.json
        return res.json(dbNotes);
    });
};

