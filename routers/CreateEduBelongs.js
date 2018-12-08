const express = require("express");
const Router = express.Router();
const FileController = require("../controller/FileController");

Router.get("/createedubelongs", (req, res) => {
    res.render("CreateEduBelongs")
})

Router.post("/createedubelongs", (req, res) => {
    let InID = req.body.InID;
    let EduID = req.body.EduID;
    FileController.findEduByID(EduID, (err, docs) => {
        let EduObjectID = docs[0]._id;
        FileController.pushEduToIntitution(InID, EduObjectID)
        res.send("Updated")
    })
})

module.exports = Router